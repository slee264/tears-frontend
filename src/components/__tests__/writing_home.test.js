import { fireEvent, render, screen, cleanup } from '@testing-library/react';
import "@testing-library/jest-dom/extend-expect";
import TestRenderer from 'react-test-renderer';
import WritingHome from '../writing/writing_home';

describe('writing home', () => {
  it("renders default state", () => {
    const { getByTestId } = render(<WritingHome />);

    //introductory backdrop opens automatically when you load the page
    const backdrop = getByTestId('introductory-backdrop');

    //once you click the backdrop, backdrop disappears
    //and then load appropriate cards.
    fireEvent.click(backdrop);
  });

  it("backdrop disappears when you click it, and loads appropriate cards", () => {

    const { getByTestId } = render(<WritingHome />);

    //introductory backdrop opens automatically when you load the page
    const backdrop = getByTestId('introductory-backdrop');

    //once you click the backdrop, backdrop disappears
    //and then load appropriate cards.
    fireEvent.click(backdrop);

    //now should appear the "click new" card (along with other dummy cards, in the future)
    const add_card = getByTestId('card-add-new');
  })

  it("loads a new dialogue with title and body textfields when you click the add new card", () => {
    const { getByTestId } = render(<WritingHome />);

    //introductory backdrop opens automatically when you load the page
    const backdrop = getByTestId('introductory-backdrop');

    //once you click the backdrop, backdrop disappears
    //and then load appropriate cards.
    fireEvent.click(backdrop);

    const add_card_action_area = getByTestId("card-action-area-add-new");

    //you press the add new card
    fireEvent.click(add_card_action_area);

    //now appears empty title and body textfields
    const new_title_textfield = getByTestId("new-title-textfield");
    const new_body_textfield = getByTestId("new-body-textfield");

    console.log(new_title_textfield);
  })
})
