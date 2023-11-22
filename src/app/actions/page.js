import ActionSteps from "./sections/actionSteps";
import ActionsForm from "./sections/actionsForm";

export const metadata = {
    title: 'Sustainable Actions • mySUN app',
    description: "Explore actionable steps to lower your Nature's Footprint with mySUN app. Start making a positive impact today!",
}

const ActionsPage = () => {
    return (
        <div>
            <ActionSteps />
            <ActionsForm />
        </div>
    );
}

export default ActionsPage;