import { Actionable, Button, Container, Flex, Form, Icon, Text, TextField, padding, Flexible, colors } from "@lenra/components";
import { LenraColors } from "@lenra/components/dist/colors.js";
import { Note } from '../classes/Note.js';

/**
 * 
 * @param {Note[]} notes 
 * @param {*} _props 
 * @returns 
 */
export default function (notes, props) {
    const boxShadow = Container.card().toJSON().decoration.boxShadow;
    return Flex([
        Text('Notes personnelles').style({
            fontSize: 20,
            fontWeight: "bold",
        }),
        Form(
            Flex([
                Flexible(
                    TextField('')
                        .name('note').style({
                            decoration: {
                                border: {
                                    type: "outline",
                                    borderSide: {}
                                }
                            }
                        })
                ),
                Button('Ajouter')
                    .size("large")
                    .submit(true),
            ])
                .spacing(16)
                .crossAxisAlignment('center'),
        ).onSubmit('saveNote', props),
        Flex(
            notes
                .sort((a, b) => b.creationDate - a.creationDate)
                .map(note =>
                    Container.card(
                        Flex([
                            Text(note.note),
                            Text(
                                new Date(note.creationDate)
                                    .toLocaleTimeString("fr")
                            )
                                .textAlign("right")
                                .style({
                                    color: LenraColors.bluePulse,
                                    fontSize: 14,
                                    fontWeight: "bold"
                                }),
                        ])
                            .spacing(8)
                            .direction("vertical")
                            .crossAxisAlignment("stretch")
                    )
                        .boxShadow({
                            ...boxShadow,
                            color: colors.opacity(boxShadow.color, 0.2)
                        })
                )
        )
            .direction('vertical')
            .spacing(16)
            .crossAxisAlignment("stretch")
    ])
        .direction('vertical')
        .spacing(24)
        .crossAxisAlignment("stretch");
}

