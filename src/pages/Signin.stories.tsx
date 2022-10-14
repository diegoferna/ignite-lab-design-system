import { Meta, StoryObj } from "@storybook/react";
import { within, userEvent, waitFor} from "@storybook/testing-library"
import { expect } from "@storybook/jest"
import { SignIn } from "./Signin";
import { rest } from 'msw'


export default {
  title: "Components/Signin",
  component: SignIn,
  args: {},
  argTypes: {},
  parameters:{
    msw: {
      handlers:[
        rest.post('/sessions', (req, res, ctx) =>{
          return res(ctx.json({
            message: 'Login realizado!'
          }))
        })
      ]
    }
  }
} as Meta;

export const Default: StoryObj = {
  play:async ({canvasElement}) => {
     const canvas = within(canvasElement)

     userEvent.type(canvas.getByPlaceholderText("Digite seu e-mail"), "diego.ferna@hotmail.com");

     userEvent.type(canvas.getByPlaceholderText("******"), "12345678");

     userEvent.click(canvas.getByRole('button'));

    //  cria um setInterval e fica rodando o código varias vezes até  passar
     await waitFor(()=> {
        return expect(canvas.getByText('Login realizado!')).toBeInTheDocument()
     })
    
  }
};
