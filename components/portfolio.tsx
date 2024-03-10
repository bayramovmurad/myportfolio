import { dataPortfolio } from "@/data";
import Title from "./shared/Title";
import Image from "next/image";
import Link from "next/link";
import { buttonVariants } from "./ui/button";

const Portfolio = () => {
    return (
        <div className="p-4 max-w-4xl md:py-24 mx-auto" id="portfolio">
            <Title title="Portfolio" subtitle="Recent works 💼" />

            <div className="grid md:grid-cols-3 gap-14 mt-4">
                {dataPortfolio.map((data) => (
                    <div key={data.id}>
                        <h3 className="text-xl mb-4">{data.title}</h3>
                        <Image
                            src={data.image}
                            alt="Image"
                            className="rounded-2xl w-[300px] h-[150px]"
                            width={300} height={150}
                        />

                        <div className="mt-5 flex gap-5">
                            <Link
                                className={buttonVariants({ variant: "outline" })}
                                href={data.urlGithub}
                                target="_blank"
                            >
                                Github
                            </Link>

                            <Link
                                className={buttonVariants()}
                                href={data.urlDemo}
                                target="_blank"
                            >
                                Live demo
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Portfolio;