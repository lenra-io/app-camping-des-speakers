import { Actionable, colors, Container, Flex, Flexible, Icon, Image, padding, Text, Toggle, View } from "@lenra/components";
import { days, rooms, sessions, sessionsSortedKeys, speakers } from "../../camping-data.js";
import { Favorite } from "../../classes/Favorite.js";
import { listeners, views } from "../../index.gen.js";
import { openfeedbacks } from "../../openfeedbacks.js";

/**
 * @param {Favorite[]} param0 
 * @param {*} _props 
 * @returns 
 */
export default function ([favorite], _props) {
    console.time("filter");
    let sessionsFilteredSortedKeys = sessionsSortedKeys;
    if (favorite?.filter) {
        if (favorite?.sessions?.length > 0) {
            sessionsFilteredSortedKeys = sessionsFilteredSortedKeys.filter(session => favorite?.filter ? favorite?.sessions?.includes(session) : true);
        }
        else {
            sessionsFilteredSortedKeys = [];
        }
    }
    console.timeEnd("filter");
    let currentDay = null;
    let currentTime = null;
    return Flex([
        Flex([
            Text("Mes sessions favorites"),
            Toggle(favorite?.filter ?? false)
                .onPressed(listeners.toggleFavoriteFilter),
        ])
            .mainAxisAlignment("spaceBetween")
            .crossAxisAlignment("center"),
        Flex(
            sessionsFilteredSortedKeys
                .map(session => sessions[session])
                .flatMap(session => {
                    const elements = [];
                    if (session.attributes.day !== currentDay) {
                        currentDay = session.attributes.day;
                        elements.push(
                            Text(days[currentDay].long)
                                .style({
                                    fontSize: 24,
                                })
                        );
                    }
                    if (session.attributes.time !== currentTime) {
                        currentTime = session.attributes.time;
                        elements.push(
                            Text(currentTime)
                                .style({
                                    fontSize: 20,
                                })
                        );
                    }
                    elements.push(sessionCard(session, favorite?.sessions?.includes(session.attributes.key) ?? false));
                    return elements;
                })
        )
            .direction("vertical")
            .crossAxisAlignment("stretch")
            .spacing(16)
    ])
        .direction("vertical")
        .crossAxisAlignment("stretch")
        .spacing(32)
}

/**
 * @param {Session} session 
 * @param {boolean} isFavorite 
 * @returns 
 */
function sessionCard(session, isFavorite) {
    return Actionable(
        Container.card(
            Flex([
                Text(session.attributes.title)
                    .style({
                        fontSize: 24,
                        fontWeight: "bold",
                    }),
                Flex(
                    session.attributes.speakers
                        .filter(speaker => speaker in speakers)
                        .map(speaker => speakers[speaker])
                        .map(speakerCard)
                )
                    .direction("vertical")
                    .spacing(4),
                Flex(
                    [
                        Flex([
                            Text(`${session.attributes.time} - ${session.attributes.duration}`),
                            Text(rooms[session.attributes.room].name),
                        ])
                            .direction("vertical"),
                        Flex(
                            [
                                Actionable(
                                    Container(
                                        Icon("forum")
                                            .color(colors.Colors.black)
                                            .style("rounded")
                                    )
                                        .padding(padding.symmetric(16, 8))
                                ).onPressed("@lenra:navTo", { path: openfeedbacks[session.attributes.key] }),
                                Actionable(
                                    Container(
                                        Icon("local_fire_department")
                                            .color(isFavorite ? colors.LenraColors.yellowPulse : colors.Colors.black)
                                            .style(isFavorite ? "rounded" : "outlined")
                                    )
                                        .padding(padding.symmetric(16, 8))
                                ).onPressed(listeners.toggleFavorite, { session: session.attributes.key }),
                            ]
                        ).spacing(8),
                    ]
                )
                    .fillParent(true)
                    .mainAxisAlignment("spaceBetween")
                    .crossAxisAlignment("end"),
            ])
                .direction("vertical")
                .spacing(16)
        )
    ).onPressed("@lenra:navTo", { path: `/sessions/${session.attributes.key}` })
}

export function speakerCard(speaker) {
    if (!speaker) {
        console.log("Speaker not found", props.speaker);
        return Text("Speaker not found");
    }
    return Flex([
        Image(speaker.attributes.photoURL ?? "")
            .width(40)
            .height(40),
        Flex([
            Text(speaker.attributes.name)
                .style({
                    fontWeight: "bold",
                }),
            Text(speaker.attributes.company ?? "")
        ])
            .direction("vertical")
    ])
        .spacing(16)
        .crossAxisAlignment("center")
}