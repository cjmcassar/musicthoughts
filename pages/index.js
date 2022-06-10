import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";

export default function Home() {
	const { isAuthenticated } = useMoralis();
	if (!isAuthenticated) {
		return (
			<>
				<Head>
					<title>Login | musicThoughts</title>
				</Head>
				<Flex>
					<Text>musicThoughts</Text>
					<Button>Login with Metamask</Button>
				</Flex>
			</>
		);
	}

	return <div>Hello world</div>;
}
