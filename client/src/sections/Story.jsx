import { FormattedMessage } from "react-intl"
import Timeline from "../components/Reusable/Timelinev2"

const Story = () => {
    return (
        <section className="relative w-full flex justify-center my-20">
            <div className=" flex-row h-auto w-full justify-center items-center bg-[var(--dark-green)]   ">
                <div className="sm:text-4xl md:text-5xl text-3xl w-full flex justify-center  text-[var(--background)] pt-6 text-nowrap my-10">
                    <FormattedMessage id="story.title" defaultMessage="Our story!" />
                </div>
                <Timeline />
            </div>
        </section >
    )
}

export default Story
