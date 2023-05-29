import { Flex, Flexible, Text, Wrap } from "@lenra/components";
import { LenraColors } from "@lenra/components/dist/colors.js";
import { Colors } from "@lenra/components/dist/colors.js";

/**
 * Build a list of components from a list of content children generated by @moox/markdown-to-json
 * It converts the html tags to Lenra components
 * @param {ContentChild[]} children 
 * @returns
 */
export function buildContentChildren(children) {
    return children.map(child => {
        if (typeof child === "string") {
            if (child === '\n') return null;
            return Text(child);
        }
        if (!("children" in child)) return null;
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
                return Text("")
                    .children(buildContentChildren(child.children));
            case "strong":
                return Text("")
                    .children(buildContentChildren(child.children))
                    .style({
                        fontWeight: "bold",
                    });
            case "em":
                return Text("")
                    .children(buildContentChildren(child.children))
                    .style({
                        fontStyle: "italic",
                    });
            case "code":
                return Text("")
                    .children(buildContentChildren(child.children))
                    .style({
                        fontFamily: "monospace",
                        // TODO: not managed yet
                        // backgroundColor: Colors.black,
                        // color: Colors.white,
                    });
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
                console.warn("Link are not supported yet", child);
                // return Actionable(Text("")
                //     .children(buildContentChildren(child.children)))
                //     .onPressed("@lenra:navTo", { path: child.props.href });
                const children = buildContentChildren(child.children);
                if (children.length === 0) return null;
                return Text("")
                    .children(children)
                    .style({ 
                        color: LenraColors.bluePulse,
                        decoration: "underline"
                     });
            default:
                console.warn("Unknown tag", child.tag);
                return Wrap(buildContentChildren(child.children));
        }
    })
        .filter(child => child !== null);
}