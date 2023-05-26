import { Flex, Text } from "@lenra/components";
import { sessions } from "../../camping-data.js";

export default function (_data, _props, { pathParams }) {
    const session = sessions[pathParams.key];
    console.log("session", session);
    return Flex([
        Text(session.attributes.title)
    ])
}

