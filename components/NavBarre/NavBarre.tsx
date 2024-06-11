import Link from "next/link";

export default function NavBarre() {
  const nav = [
    {
      id: 0,
      name: "Ammos",
      path: "/ammos",
    },
    {
      id: 1,
      name: "Armors",
      path: "/armors",
    },
    {
      id: 2,
      name: "Ashes of war",
      path: "/ashe_of_war",
    },
    {
      id: 3,
      name: "bosses",
      path: "/bosses",
    },
    {
      id: 4,
      name: "classes",
      path: "/classes_elden",
    },
    {
      id: 5,
      name: "Creatures",
      path: "/creatures",
    },
    {
      id: 6,
      name: "incantantions",
      path: "/incantations",
    },
    {
      id: 7,
      name: "items",
      path: "/items",
    },
    {
      id: 8,
      name: "Npc",
      path: "/npc",
    },
  ];

  return (
    <ul>
      {nav.map((e) => (
        <li key={e.id}>
          <Link href={e.path}>{e.name}</Link>
        </li>
      ))}
    </ul>
  );
}
