import {
    Router, Request, Response
} from "express";

var ter = 1;

const path: String = "/food";
const router: Router = Router();

router.get(path + "/list", (
    req: Request, res: Response
) => {
    res.json({
        success: true,
        list: [1,2,3,4,5]
    });
});

export const FoodResource: Router = router;

// By the moment is better to use nodemoduler with pure javascript
// Still nothing is clear with typeScript in the BackEnd