import express, { type Express, type NextFunction, type Request, type Response } from "express"

const app: Express = express()

type MainUrlResponseBody = { message: string }
type MainUrlErrorResponseBody = { error: string }



app.get("/", (req: Request, res: Response<MainUrlResponseBody | MainUrlErrorResponseBody>, next: NextFunction) => {

    res.status(200).json({
        message: "Hello Mahyar!",
    });

})

app.get("/mahyar/mahan", (req: Request, res: Response<MainUrlResponseBody>, next: NextFunction) => {
    res.status(200).json({
        message: "Hello Mahyar!",
    });
})


const PORT: number = 3000;

app.listen(PORT, (error?: Error) => {
    if (error)
        console.log("i have error", error)
    console.log(`i am listening to http://localhost:${PORT}`)
}) 