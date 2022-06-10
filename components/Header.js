import Head from "next/head";
import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({ user, logout }) {
	return (
		<>
			<header>
				<Flex>
					<Center>
						<Text fontSize="5xl" fontWeight="bold" color="black">
							musicThoughts
						</Text>
					</Center>
					<Center>
						<Text>{user.getUsername()}</Text>
						<Button onClick={logout}>Logout</Button>
					</Center>
				</Flex>
			</header>
		</>
	);
}
