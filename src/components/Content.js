import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, } from "@chakra-ui/react"
import { Table, Thead, Tbody, Tr, Th, Td } from "@chakra-ui/react"
import { Button } from "@chakra-ui/react"
import { Heading } from "@chakra-ui/react"
import { Tag } from "@chakra-ui/react"

import * as Identicon from "identicon.js";

import u from '../utils/users';

import './Content.css';

function Content() {
	return (
		<div className="content-container">
			<div className="navigation-container">
				<Breadcrumb>
					<BreadcrumbItem>
						<BreadcrumbLink href="#">Home</BreadcrumbLink>
					</BreadcrumbItem>
					<BreadcrumbItem isCurrentPage>
						<BreadcrumbLink href="#">Dashboard</BreadcrumbLink>
					</BreadcrumbItem>
				</Breadcrumb>
			</div>
			<div className="content-controls">
				<Heading>User</Heading>
				<Button colorScheme="blue">Add user</Button>
			</div>

			<div className="table-container">
				<Table variant="simple">
					<Thead>
						<Tr>
							<Th></Th>
							<Th>User Messaged?</Th>
							<Th>Name</Th>
							<Th>Color</Th>
							<Th>Birthday</Th>
							<Th>Note</Th>
							<Th></Th>
						</Tr>
					</Thead>
					<Tbody>
						{u.map(
							(r) => (
								<Tr key={r.key}>
									<Td><img className='avatar-item' key={r.key} src={`data:image/svg+xml;base64,${new Identicon(r.key, { format: 'svg' }).toString()}`} alt={r.key} /></Td>
									<Td><div className='center'><p>{r.messaged ? '✅' : '❌'}</p></div></Td>
									<Td>{r.name}</Td>
									<Td><Tag style={{'backgroundColor': r.color, 'color': 'white'}}>{r.color}</Tag></Td>
									<Td><p>{`${r.birthday.getUTCFullYear()}-${r.birthday.getUTCMonth() + 1}-${r.birthday.getUTCDate()}`}</p></Td>
									<Td>{r.note}</Td>
									<Td>
										<div className='table-option-container'>
											<Button colorScheme="blue">Message</Button>
											<Button>Delete</Button>
										</div>
									</Td>
								</Tr>
							)
						)}
					</Tbody>
				</Table>
			</div>
		</div>
	);
}

export default Content;
