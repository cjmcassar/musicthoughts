import {
	Box,
	Button,
	Flex,
	Tabs,
	Tab,
	TabList,
	Text,
	TabPanels,
	TabPanel,
} from "@chakra-ui/react";
import Head from "next/head";
import { useMoralis } from "react-moralis";
import Balance from "../components/Balance";
import Header from "../components/Header";
import Nft from "../components/Nft";
import Profile from "../components/Profile";
import Transactions from "../components/Transactions";

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
				<Box flex="1" bg="teal.100" px="44" py="20">
					<Tabs size="lg" colorScheme="teal" align="center" varient="enclosed">
						<TabList>
							<Tab fontWeight="bold">Profile</Tab>
							<Tab fontWeight="bold">Balance</Tab>
							<Tab fontWeight="bold">Transactions</Tab>
							<Tab fontWeight="bold">NFTs</Tab>
							<Tab fontWeight="bold">Send ETH</Tab>
						</TabList>
						<TabPanels>
							<TabPanel>
								<Profile user={user} />
							</TabPanel>
							<TabPanel>
								<Balance user={user} />
							</TabPanel>
							<TabPanel>
								<Transactions user={user} />
							</TabPanel>
							<TabPanel>
								<Nft user={user} />
							</TabPanel>
						</TabPanels>
					</Tabs>
				</Box>
			</Flex>
		</>
	);
}
