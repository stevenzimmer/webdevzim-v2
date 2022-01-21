import Link from "next/link";
import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H6 from "@material-tailwind/react/Heading6";
import Paragraph from "@material-tailwind/react/Paragraph";
import Button from "@material-tailwind/react/Button";

import { FaReact } from "react-icons/fa";

import Small from "@material-tailwind/react/Small";

export default function Column({ detail }) {
    return (
        <Card className=" group ">
            <CardImage
                className="top-0 group-hover:top-2 transition-all relative"
                src={detail.img}
                alt={`${detail.title} image`}
            />

            <CardBody className="">
                <H6 color="gray">{detail.title}</H6>
                <Paragraph color="gray">{detail.desc}</Paragraph>
                <div className="flex items-center  space-x-2">
                    {detail.tags?.map((tag) => {
                        return (
                            <div className="bg-grey-50 flex items-center text-grey-700 rounded px-2 space-x-1">
                                <div className="w-auto">
                                    <FaReact className="text-blue-400" />
                                </div>
                                <div className="w-auto">
                                    <Small className="uppercase">{tag}</Small>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </CardBody>

            <CardFooter>
                <Link href={detail.cta.link}>
                    <Button color="lightBlue" size="lg" ripple="light">
                        {detail.cta.title}
                    </Button>
                </Link>
            </CardFooter>
        </Card>
    );
}
