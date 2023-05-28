import { Actionable, Flex, Flexible, Text, View, Wrap } from "@lenra/components";
import { sessions, speakers } from "../../camping-data.js";
import { views } from "../../index.gen.js";
import { days } from "./agenda.js";

export default function (_data, /* _props,  */{ context: { pathParams } }) {
    const session = sessions[pathParams.key];
    return Flex([
        header(session),
        ...body(session),
        ...speakerList(session),
    ])
        .direction("vertical")
        .spacing(16)
        .crossAxisAlignment("stretch")
}

/**
 * @param {Session} session 
 * @returns 
 */
function header(session) {
    return Flex([
        Text(session.attributes.title)
            .style({
                fontSize: 24,
                fontWeight: "bold",
            }),
        Text(`${days[session.attributes.day]} ${session.attributes.time} - ${session.attributes.duration}`),
        Text(session.attributes.room),
    ])
        .direction("vertical")
}

/**
 * @param {Session} session 
 * @returns 
 */
function body(session) {
    const children = buildContentChildren(session.children);
    if (children.length > 1)
        return [Flex(children).direction("vertical").spacing(8)];
    return children;
}

/**
 * @param {Session} session 
 * @returns 
 */
function speakerList(session) {
    console.log(session.attributes.speakers);
    const cards = session.attributes.speakers
        .filter(speaker => speaker in speakers)
        .map(speaker => View(views.pages.agenda.speaker).props({ speaker }));
    if (cards.length > 1)
        return [Wrap(cards).spacing(16)];
    return cards;
}

/**
 * @param {ContentChild[]} children 
 * @returns
 */
function buildContentChildren(children) {
    return children.map(child => {
        if (typeof child === "string") {
            if (child === '\n') return null;
            return Text(child);
        }
        switch (child.tag) {
            case "h1":
                return Text("")
                    .children(buildContentChildren(child.children))
                    .style({
                        fontSize: 24,
                        fontWeight: "bold",
                    });
            case "h2":
                return Text("")
                    .children(buildContentChildren(child.children))
                    .style({
                        fontSize: 20,
                        fontWeight: "bold",
                    });
            case "h3":
                return Text("")
                    .children(buildContentChildren(child.children))
                    .style({
                        fontSize: 18,
                        fontWeight: "bold",
                    });
            case "h4":
                return Text("")
                    .children(buildContentChildren(child.children))
                    .style({
                        fontSize: 16,
                        fontWeight: "bold",
                    });
            case "p":
                return Text("")
                    .children(buildContentChildren(child.children));
            case "span":
                if ("children" in child)
                    return Text("")
                        .children(buildContentChildren(child.children));
                return null;
            case "ul":
                return Flex(buildContentChildren(child.children))
                    .direction("vertical")
                    .padding({ left: 8 });
            case "li":
                return Flex([
                    Text("•"),
                    Flexible(Flex(buildContentChildren(child.children)))
                ])
                    .spacing(8);
            case "a":
                console.warn("Link are not supported yet", child)
                return null;
                // return Actionable(Text("")
                //     .children(buildContentChildren(child.children)))
                //     .onPressed("@lenra:navTo", { path: child.props.href });
            default:
                console.warn("Unknown tag", child.tag);
                return Wrap(buildContentChildren(child.children));
        }
    })
        .filter(child => child !== null);
}