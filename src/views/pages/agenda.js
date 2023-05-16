import { Container, Flex, Flexible, Image, padding, Text, View } from "@lenra/components";
import { sessions, speakers } from "../../camping-data.js";
import { views } from "../../index.gen.js";

const days = ["Jeudi, 15 juin 2023", "Vendredi, 16 juin 2023"];

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
    return Container(
        Flex(
            sortedSessions.flatMap((session) => {
                const elements = [];
                if (session.attributes.day !== currentDay) {
                    currentDay = session.attributes.day;
                    elements.push(
                        Text(days[currentDay])
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
                elements.push(
                    Container.card(
                        Flex([
                            Text(session.attributes.title)
                                .style({
                                    fontSize: 24,
                                    fontWeight: "bold",
                                }),
                            Flex(
                                session.attributes.speakers
                                    .filter(speaker => speaker in speakers || console.log(speaker))
                                    .map(speaker => View(views.pages.agenda.speaker).props({ speaker }))
                            )
                                .direction("vertical"),
                            Flex([
                                Text(`${session.attributes.time} - ${session.attributes.duration}`),
                                Text(session.attributes.room),
                            ])
                                .direction("vertical"),
                        ])
                            .direction("vertical")
                            .spacing(16)
                    )
                );
                return elements;
            })
        )
            .direction("vertical")
            .scroll(true)
            .crossAxisAlignment("stretch")
            .spacing(16)
    )
        .padding(padding.symmetric(16, 0))
        .maxWidth(800)
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