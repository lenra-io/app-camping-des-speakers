import { Actionable, Button, Container, Flex, Form, Icon, Text, TextField, padding, Flexible } from "@lenra/components";

export default function (data, _props) {
    return Flex([
        Text('Notes personnelles').style({
            fontSize: 20,
            fontWeight: "bold",
        }),
        Form(
            Flex([
                Container(TextField('').maxLines(200).name('note').style({
                    decoration: {
                        border: {
                            type: "outline",
                            borderSide: {}

                        }
                    }
                })),
                Button('Enregistrer').submit(true),
            ]).direction('vertical').spacing(16).crossAxisAlignment('center'),
        ).onSubmit('saveNote'),
        Container().border({ top: { width: 1 }, }).maxWidth(800),
        Container(Flex([
            ...((data.length > 0 ? data.reverse().map(note => {
                return [
                    Flex([
                        Flexible(Container(Text(note.note)).padding(padding.all(8))),
                        Flex([
                            Actionable(Icon('edit')).onPressed('toggleEditNote', {id: note._id}),
                            Actionable(Icon("delete")).onPressed('deleteNote', note),
                        ]).direction('vertical').spacing(8),
                    ]),
                    Container().border({ top: { width: 1, color: 0x66000000 }, }).maxWidth(800),
                ];
            }) : []).flat()),
        ]).direction('vertical').spacing(16))
    ]).direction('vertical').spacing(16)
}

