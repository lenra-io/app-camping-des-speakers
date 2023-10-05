import { Actionable, Container, Flex, Flexible, Icon, padding, Text, View, Wrap } from "@lenra/app";
import { sessions, speakers } from "../camping-data.js";

export default function (_data, { page/* , context */, find, maxWidth }, context) {
  if (!maxWidth) maxWidth = 800;
  const pageView = View(page);
  // if (context) pageView.context(context);
  if (context) pageView.props({ context });
  if (find) pageView.find(find);
  return Flex([
    View("menu"),
    Flexible(
      Flex([
        Container(
          Flex([
            filAriane(page, context),
            pageView
          ])
            .direction("vertical")
            .spacing(16)
            .crossAxisAlignment("stretch")
        )
          .maxWidth(maxWidth)
      ])
        .direction("vertical")
        .padding(padding.symmetric(32, 16))
        .crossAxisAlignment("center")
        .scroll(true)
    ),
    View("navbar").props({ page }),
  ])
    .direction("vertical")
    .crossAxisAlignment("stretch")
}

const arianeStyle = {
  fontSize: 16,
  heightMultiplier: 1.5,
  height: 24,
  minHeight: 32,
}

arianeStyle.verticalPadding = (arianeStyle.minHeight - arianeStyle.height) / 2;
arianeStyle.textBaseStyle = {
  fontSize: arianeStyle.fontSize,
  height: arianeStyle.heightMultiplier,
};

export function filAriane(page, context) {
  const globalPath = pagePath(page, context);
  const pathElements = globalPath.split("/").filter(e => e !== "");
  // Si on est sur la page d'accueil ou qu'on n'est pas dans l'arbre de l'agenda, on ajoute un élément vide pour avoir un lien vers la page d'accueil
  if (!globalPath.startsWith("/sessions")) pathElements.unshift("");
  return Wrap(
    pathElements.flatMap((pathElement, index) => {
      const isLast = index === pathElements.length - 1;
      const { path, name } = getArianeElement(pathElement, index, pathElements, globalPath);
      // Element de base
      let element = name.length === 0
        ? Icon("home")
          .size(arianeStyle.height)
        : Text(name)
          .style({
            ...arianeStyle.textBaseStyle,
            fontWeight: isLast ? "bold" : "normal",
          });
      // On rajoute le padding
      element = Container(element)
        .padding(padding.symmetric(8, arianeStyle.verticalPadding));
      if (isLast) return [element];
      // On rajoute le lien vers la page
      return [
        Actionable(
          element
        )
          .onPressed("@lenra:navTo", { path }),
        Container(
          Text(">").style(arianeStyle.textBaseStyle)
        )
          .padding(padding.symmetric(0, arianeStyle.verticalPadding))
      ]
    })
  )
}

/**
 * 
 * @param {string} currentElement
 * @param {number} index
 * @param {Array<string>} pathElements
 * @param {string} globalPath
 * @returns {{path: string, name: string}}
 */
function getArianeElement(currentElement, index, pathElements, globalPath) {
  if (index === 0 && currentElement.length === 0 && pathElements.length > 1 && !globalPath.startsWith("/sessions")) {
    return {
      path: "/",
      name: ""
    }
  }
  else {
    let path = `${pathElements.slice(0, index + 1).join("/")}`;
    if (path === "sessions") path = "/";
    else if (!path.startsWith("/")) path = `/${path}`;
    const { page, context } = pathToPage(path);
    return {
      path,
      name: pageName(page, context)
    };
  }
}

function pageName(page, context) {
  switch (page) {
    case "pages.agenda":
      return "Agenda";
    case "pages.session":
      return sessions[context.pathParams.key].attributes.title;
    case "pages.speakerList":
      return "Speakers";
    case "pages.speaker":
      return speakers[context.pathParams.key].attributes.name;
    case "pages.map":
      return "Map";
    default:
      throw new Error(`Unknown page ${page}`);
  }
}

function pagePath(page, context) {
  switch (page) {
    case "pages.agenda":
      return "/";
    case "pages.session":
      return `/sessions/${context.pathParams.key}`;
    case "pages.speakerList":
      return "/speakers";
    case "pages.speaker":
      return `/speakers/${context.pathParams.key}`;
    case "pages.map":
      return "/map";
    default:
      throw new Error(`Unknown page ${page}`);
  }
}

function pathToPage(path) {
  switch (path) {
    case "/":
      return { page: "pages.agenda" };
    case "/speakers":
      return { page: "pages.speakerList" };
    case "/map":
      return { page: "pages.map" };
    default:
      if (path.startsWith("/sessions/")) return { page: "pages.session", context: { pathParams: { key: path.split("/")[2] } } };
      if (path.startsWith("/speakers/")) return { page: "pages.speaker", context: { pathParams: { key: path.split("/")[2] } } };
      return null;
  }
}
