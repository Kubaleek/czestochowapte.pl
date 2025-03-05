import SlugMain from "@/components/ui/PagesPage/main";

export default async function SlugPage(props: { params: Promise<{slug: string}> }){
    const { slug } = await props.params
    
    return (
        <SlugMain slug={slug} />
    );
}