export async function getData() {
    return {
        props: {
            message: "This is a static page"
        }
    }
}

const Page = ({ message }) => {
    return (
        <main>
            <h1 id="message">{message}</h1>
        </main>
    );
};

export default Page