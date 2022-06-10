import { Button, Flex, Text } from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Header from "../components/Header";

export default function Home() {
	const { isAuthenticated, authenticate, user, logout, isLoggingOut } =
		useMoralis();
	if (!isAuthenticated) {
		return (
			<>
				<Head>
					<title>Login | musicThoughts</title>
				</Head>
				<Flex
					direction="column"
					justifyContent="center"
					alignItems="center"
					width="100vw"
					height="100vh"
					bgGradient="linear(to-br, teal.400, purple.300)"
				>
					<Text fontSize="5xl" fontWeight="bold" color="white">
						musicThoughts
					</Text>
					<Button
						colorScheme="teal"
						size="lg"
						mt="6"
						onClick={() =>
							authenticate({
								signingMessage: "Sign to login to musicThoughts",
							})
						}
					>
						Login with Metamask
					</Button>
				</Flex>
			</>
		);
	}

	return (
		<>
			<Head>
				<title>musicThoughts</title>
			</Head>
			<Flex direction="column" width="100vw" height="100vh">
				<Header user={user} logout={logout} isLoggingOut={isLoggingOut} />
			</Flex>
		</>
	);
}
