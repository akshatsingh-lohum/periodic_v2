import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const people = [
  {
    id: "paul",
    name: "Paulami",
    role: "Head, Research",
    avatar: "https://shadcnblocks.com/images/block/avatar-1.webp",
    email: "paulami@lohum,com",
  },
  {
    id: "person-2",
    name: "Amit",
    role: "Analyst",
    avatar: "https://shadcnblocks.com/images/block/avatar-2.webp",
    email: "paulami@lohum,com",
  },
  {
    id: "person-3",
    name: "Vijay",
    role: "Researcher",
    avatar: "https://shadcnblocks.com/images/block/avatar-3.webp",
    email: "paulami@lohum,com",
  },
  {
    id: "person-4",
    name: "Akshat",
    role: "Developer",
    avatar: "https://shadcnblocks.com/images/block/avatar-4.webp",
    email: "paulami@lohum,com",
  },
  //   {
  //     id: "person-5",
  //     name: "Name",
  //     role: "Role",
  //     avatar: "https://shadcnblocks.com/images/block/avatar-5.webp",
  //   },
  //   {
  //     id: "person-6",
  //     name: "Name",
  //     role: "Role",
  //     avatar: "https://shadcnblocks.com/images/block/avatar-6.webp",
  //   },
  //   {
  //     id: "person-7",
  //     name: "Name",
  //     role: "Role",
  //     avatar: "https://shadcnblocks.com/images/block/avatar-7.webp",
  //   },
  //   {
  //     id: "person-8",
  //     name: "Name",
  //     role: "Role",
  //     avatar: "https://shadcnblocks.com/images/block/avatar-8.webp",
  //   },
];

const Contact = () => {
  return (
    <section className="py-12">
      <div className="container flex flex-col items-center text-center">
        <h2 className="my-6 text-pretty text-2xl font-bold lg:text-4xl">
          Meet our team
        </h2>
        <p className="mb-8 max-w-3xl text-muted-foreground lg:text-xl">
          Cool Ass Team!
        </p>
      </div>
      <div className="container mt-16 grid gap-x-8 gap-y-16 md:grid-cols-2 lg:grid-cols-4">
        {people.map((person) => (
          <div key={person.id} className="flex flex-col items-center">
            <Avatar className="mb-4 size-20 border md:mb-5 lg:size-24">
              <AvatarImage src={person.avatar} />
              <AvatarFallback>{person.name}</AvatarFallback>
            </Avatar>
            <p className="text-center font-medium">{person.name}</p>
            <p className="text-center text-muted-foreground">{person.role}</p>
            <p className="text-center text-muted-foreground">{person.email}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Contact;
