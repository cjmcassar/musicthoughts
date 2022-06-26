import Head from "next/head";
import { Button, Center, Flex, Text } from "@chakra-ui/react";

export default function Header({ user, logout, isLoggingOut }) {
	return (
		<>
			<header>
				<Flex
					px="10"
					py="6"
					justifyContent="space-between"
					bg="teal.400"
					color="white"
				>
					<Center>
						<Text fontSize="xl" fontWeight="bold" color="black">
							musicThoughts
						</Text>
					</Center>
					<Center>
						<Text>{user.getUsername()}</Text>
						<Button
							ml="4"
							colorScheme="teal"
							onClick={logout}
							disabled={isLoggingOut}
						>
							Logout
						</Button>
					</Center>
				</Flex>
			</header>
		</>
	);
}
