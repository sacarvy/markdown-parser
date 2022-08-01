import { parse } from "./markdown-parser"

{
    (async () => {
        console.log(await parse(`
# Hello World

Nice to meet you

## Heading level 2

Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, doloribus veritatis! Hic quae voluptatibus alias natus nam deserunt, neque architecto eum delectus praesentium libero nemo cum officia, doloremque dolores recusandae ullam blanditiis animi distinctio ad non excepturi, voluptate illum. Recusandae inventore expedita consectetur fugit porro eius sequi, soluta delectus qui?

::Head
Headignasdff
::

~~Strikethrough~~

        `))
    })()
}
