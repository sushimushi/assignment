
import { createServer } from "miragejs";

createServer({
    routes() {
        this.namespace = "api";

        this.get("/employees", () => ({ employees: list }));
    },
});

const list = [{
    id: '1',
    name: "Mark Hill",
    designation: "Chief Executive Officer",
    team: "",
    managerId: "",
    img: '/assets/001.png'
},
{
    id: '2',
    name: "Joe Linux",
    designation: "Chief Business Officer",
    team: "Database",
    managerId: '1',
    img: '/assets/003.png'
},

{
    id: '3',
    name: "Linda May",
    designation: "Chief Technology Officer",
    team: "Development",
    managerId: '1',
    img: '/assets/002.png'
},
{
    id: '4',
    name: "Jhon Green",
    designation: "Chief Business Officer",
    team: "Marketing",
    managerId: '1',
    img: '/assets/004.png'
},
{
    id: '5',
    name: "Ron Blonquist",
    designation: "Chief Business Officer",
    team: "Database",
    managerId: '2',
    img: '/assets/005.png'
},
{
    id: '6',
    name: "Michael Rubin",
    designation: "Chief Business Officer",
    team: "Database",
    managerId: '2',
    img: '/assets/008.png'
},
{
    id: '7',
    name: "Alice Lopez",
    designation: "Chief Business Officer",
    team: "Development",
    managerId: '3',
    img: '/assets/006.png'
},
{
    id: '8',
    name: "Mary Jhonson",
    designation: "Chief Business Officer",
    team: "Development",
    managerId: '3',
    img: '/assets/009.png'
},
{
    id: '9',
    name: "Kirk Douglas",
    designation: "Chief Business Development Officer",
    team: "Development",
    managerId: '3',
    img: '/assets/010.png'
},
{
    id: '10',
    name: "Erica Reel",
    designation: "Chief Customer Officer",
    team: "Marketing",
    managerId: '4',
    img: '/assets/007.png'
}];