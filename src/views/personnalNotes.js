import { Button, Container, Flex, Form, Text, TextField, border, borderRadius, padding } from "@lenra/components";

export default function (data, _props) {
    return Flex([
        Text('Notes personnelles').style({
            fontSize: 20,
            fontWeight: "bold",
        }),
        Form(
            Flex([
                TextField('').maxLines(200).name('note'),
                Button('Enregistrer').submit(true),
            ]).direction('vertical').spacing(16)
        ).onSubmit('saveNote'),
        ...(data.length > 0 ? data[0].notes.map(note => {
            return Container(Text(note)).padding(padding.all(8)).border({
                "top": { "width": 1 },
                "left": { "width": 1 },
                "bottom": { "width": 1 },
                "right": { "width": 1 },
            }).borderRadius(borderRadius.all(8));
        }) : []),
    ]).direction('vertical').spacing(16)
}

