import { vi } from "vitest";
import App from "../App"
import Wrapper from "./helpers/context_Wrapper"
import renderWithRouter from "./helpers/render_with_router"
import { screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event';
import fetch_api from "./mock/fetch";

const EMAIL = 'x@x.com';
const PASSWORD = '1234567';

describe('Route "/"', () => {
  vi.spyOn(global, 'fetch').mockImplementation(fetch_api);
  it('Login with success', async () => {
    renderWithRouter(
      <Wrapper>
        <App />
      </Wrapper>
    );
    const BTN_SIGN = screen.getByRole('button', {  name: /sign up/i})

    expect(BTN_SIGN).toBeDisabled();
    await userEvent.type(screen.getByRole('textbox'), EMAIL);
    await userEvent.type(screen.getByPlaceholderText(/7-digits/i), PASSWORD);
    await userEvent.click(BTN_SIGN);

  })
})