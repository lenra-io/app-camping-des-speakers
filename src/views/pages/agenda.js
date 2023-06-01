import { Actionable, Container, Flex, Text, View } from "@lenra/components";
import { days, rooms, sessions, speakers } from "../../camping-data.js";
import { Favorite } from "../../classes/Favorite.js";
import { views } from "../../index.gen.js";

/**
 * @param {Favorite[]} param0 
 * @param {*} _props 
 * @returns 
 */
export default function ([favorite], _props) {
    const sortedSessions = Object.values(sessions).sort((a, b) => {
        if (a.attributes.day !== b.attributes.day) {
            return a.attributes.day - b.attributes.day;
        }
        if (a.attributes.time !== b.attributes.time) {
            return a.attributes.time.localeCompare(b.attributes.time);
        }
        return a.attributes.title.localeCompare(b.attributes.title);
    });
    let currentDay = null;
    let currentTime = null;
    return Flex(
        sortedSessions.flatMap((session) => {
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
                Flex(
                    [
                        Text(session.attributes.title)
                            .style({
                                fontSize: 24,
                                fontWeight: "bold",
                            }),
                        Actionable(Icon("favorite").color(isFavorite ? 0xFFFF0000 : 0xFF000000)).onPressed("addFavorite", { session: session.attributes.key }),
                    ]
                ).fillParent(true).mainAxisAlignment("spaceBetween"),
                Flex(
                    session.attributes.speakers
                        .filter(speaker => speaker in speakers)
                        .map(speaker => View(views.pages.agenda.speaker).props({ speaker }))
                )
                    .direction("vertical")
                    .spacing(8),
                Flex([
                    Text(`${session.attributes.time} - ${session.attributes.duration}`)
                    ,
                    Text(rooms[session.attributes.room].name),
                ])
                    .direction("vertical"),
            ])
                .direction("vertical")
                .spacing(16)
        )
    ).onPressed("@lenra:navTo", { path: `/sessions/${session.attributes.key}` })
}

export function speaker(_data, props) {
    const speaker = speakers[props.speaker];
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