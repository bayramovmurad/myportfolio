import { dataContact } from "@/data";
import Title from "./shared/Title";
import Link from "next/link";
import ContactForm from "./contact-form";

const Contact = () => {
    return (
        <div className="p-6 md:px-12 md:py-28 max-w-5xl mx-auto" id="contact">
            <Title title="Contact me 👋" subtitle="I'm looking forward to your message 👋" />

            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-7 mt-8">
                <div>
                    {dataContact.map((data) => (
                        <div key={data.id}
                            className="flex flex-col items-center dark:bg-slate-800 rounded-lg mb-5 p-4"
                        >
                            {data.icon}
                            <p>{data.title}</p>
                            <Link href={data.link} target="_blank">
                                <p>{data.link}</p>
                            </Link>
                        </div>
                    ))}
                </div>
                <div className="col-span-2">
                    <ContactForm />
                </div>
            </div>
        </div>
    );
}

export default Contact;