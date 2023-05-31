import { Actionable, Container, Flex, Flexible, Image, padding, Text, View } from "@lenra/components";
import { days, rooms, sessions, speakers } from "../../camping-data.js";
import { listeners, views } from "../../index.gen.js";

export default function (_data, _props) {
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
            elements.push(sessionCard(session));
            return elements;
        })
    )
        .direction("vertical")
        .crossAxisAlignment("stretch")
        .spacing(16)
}

function sessionCard(session) {
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
                        .map(speaker => View(views.pages.agenda.speaker).props({ speaker }))
                )
                    .direction("vertical"),
                Flex([
                    Text(`${session.attributes.time} - ${session.attributes.duration}`),
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
        // Image(speaker.attributes.photoURL),
        Flex([
            Text(speaker.attributes.name),
            Text(speaker.attributes.company ?? ""),
        ])
            .direction("vertical")
    ])
}