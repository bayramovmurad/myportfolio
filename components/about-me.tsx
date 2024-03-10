import { Phone } from "lucide-react";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/Title";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import { Button } from "./ui/button";
import Image from "next/image";

const AboutMe = () => {
    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl mx-auto" id="about-me">
            <Title title="About me" subtitle="Know me" />

            <div className="grid md:grid-cols-2">
                <div className="py-12 md:py-0 flex items-center justify-center">
                    <Carousel
                        opts={{
                            align: "start"
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                    >
                        <CarouselContent className="-mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image
                                            src={data.url}
                                            alt="Image"
                                            width={250} height={400}
                                            className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4"
                    >
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 
                        rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                    <p className="my-8">I am a passionate developer who finds his greatest inspiration between lines of code and challenging algorithms. When I am not immersed in programming, I enjoy the outdoors and sports, firmly believing in maintaining a balance between mind and body. Additionally, I am an avid reader, finding books an inexhaustible source of knowledge and personal growth. On social media, I share my passion for programming, creating inspiring and educational content to connect with other software development enthusiasts.</p>

                    <Button>
                        <Phone size={20} className="mr-2" />Talk later
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;