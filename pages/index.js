import Head from "next/head";
import Image from "next/image";
// import styles from "../styles/Home.module.css";
import ITyped from "react-ityped";
import Wrapper from "@/components/Wrapper";
import Column from "@/components/Column";
const strings = [
    "Developer",
    "Designer",
    "Engineer",
    "Programmer",
    "Marketer",
    "Dev Zim",
];
import H2 from "@material-tailwind/react/Heading2";

const details = [
    {
        img: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        title: "Card Title",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        cta: {
            title: "Read Now",
            link: "#",
        },
        tags: ["Next JS", "React", "Strapi"],
    },
    {
        img: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        title: "Card Title",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        cta: {
            title: "Read Now",
            link: "#",
        },
        tags: ["Next JS", "React", "Strapi"],
    },
    {
        img: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        title: "Card Title",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        cta: {
            title: "Read Now",
            link: "#",
        },
        tags: ["Next JS", "React", "Strapi"],
    },
    {
        img: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        title: "Card Title",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        cta: {
            title: "Read Now",
            link: "#",
        },
        tags: ["Next JS", "React", "Strapi"],
    },
    {
        img: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        title: "Card Title",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        cta: {
            title: "Read Now",
            link: "#",
        },
        tags: ["Next JS", "React", "Strapi"],
    },
    {
        img: "https://images.unsplash.com/photo-1612831455740-a2f6212eeeb2?ixid=MXwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2250&q=80",
        title: "Card Title",
        desc: "Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is...",
        cta: {
            title: "Read Now",
            link: "#",
        },
        tags: ["Next JS", "React", "Strapi"],
    },
];

export default function Home() {
    return (
        <>
            <Head>
                <title>Web Dev Zim</title>
                <meta name="description" content="webdevzim app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Wrapper>
                <div className="flex justify-center py-12">
                    <div className="lg:w-10/12">
                        {/* Web{" "} */}
                        {/* <ITyped
                    className="inline"
                    loop={false}
                    strings={strings}
                    backDelay={1500}
                /> */}
                        <H2 color="lightBlue">Material Tailwind</H2>
                        <div className="flex flex-wrap justify-start -mx-6 mb-12">
                            {details?.map((detail, i) => {
                                return (
                                    <div
                                        className="lg:w-1/3 px-6 mb-12"
                                        key={i}
                                    >
                                        <Column detail={detail} />
                                    </div>
                                );
                            })}
                        </div>
                        <H2 color="lightBlue">Material Tailwind</H2>
                    </div>
                </div>
            </Wrapper>
        </>
    );
}
