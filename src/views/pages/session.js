import { Actionable, Container, Flex, Icon, Text, TextField, View, Wrap, colors, padding } from "@lenra/components";
import { days, rooms, sessions, speakers } from "../../camping-data.js";
import { listeners, views } from "../../index.gen.js";
import { buildContentChildren } from "../../utils/contentDescriber.js";
import { openfeedbacks } from "../../openfeedbacks.js";
import { speakerCard } from "./agenda.js";
import { DataApi } from "@lenra/app-server";
import { Note } from "../../classes/Note.js";

export default function ([favorite], /* _props,  */{ context: { pathParams } }) {
    const session = sessions[pathParams.key];
    const isFavorite = favorite?.sessions?.includes(session.attributes.key) ?? false;
    return Flex([
        header(session),
        ...body(session),
        ...speakerList(session),
        Flex([
            Actionable(
                Container(
                    Flex([
                        Icon("local_fire_department")
                            .color(isFavorite ? colors.LenraColors.yellowPulse : colors.Colors.black)
                            .style(isFavorite ? "rounded" : "outlined"),
                        Text(isFavorite ? "Retirer des favoris" : "Ajouter aux favoris")
                    ])
                        .spacing(16)
                )
                    .alignment("center")
                    // .maxWidth(120)
                    .padding(padding.symmetric(16, 8))
            ).onPressed(listeners.toggleFavorite, { session: session.attributes.key }),
            Actionable(
                Container(
                    Flex([
                        Icon("forum")
                            .color(colors.Colors.black)
                            .style("rounded"),
                        Text("Feedback")
                    ])
                        .spacing(16)
                )
                    .alignment("center")
                    // .maxWidth(120)
                    .padding(padding.symmetric(16, 8))
            ).onPressed("@lenra:navTo", { path: openfeedbacks[session.attributes.key] }),
        ])
            .spacing(16),
        View(views.personnalNotes).data(DataApi.collectionName(Note), {user: "@me", session.attributes.key}),
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
        Text(`${days[session.attributes.day].long} ${session.attributes.time} - ${session.attributes.duration}`),
        Text(rooms[session.attributes.room].name),
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
    const cards = session.attributes.speakers
        .filter(speaker => speaker in speakers)
        .map(speaker => speakers[speaker])
        .map(speaker =>
            Actionable(
                speakerCard(speaker)
            )
                .onPressed("@lenra:navTo", { path: `/speakers/${speaker.attributes.key}` })
        );
    if (cards.length > 0)
        return [Wrap(cards).spacing(16)];
    return cards;
}
