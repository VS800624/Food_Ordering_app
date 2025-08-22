import { render, screen } from "@testing-library/react"
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard"
import MOCK_DATA from "../mocks/resCardMock.json"
import "@testing-library/jest-dom"

it("should render RestaurantCard component with props data", () => {

    render(<RestaurantCard resData={MOCK_DATA.resData} />);

    const name = screen.getByText("LunchBox - Meals and Thalis")

    expect(name).toBeInTheDocument();
})

const PromotedRestaurantCard = withPromotedLabel(RestaurantCard);

it("should render RestaurantCard component with Promoted Label", () => {
     render(<PromotedRestaurantCard resData={MOCK_DATA.resData} />);

    const promoted = screen.getByText("promoted")

    expect(promoted).toBeInTheDocument();
})