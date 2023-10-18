import {Films, UsersCommentsRel, Users, Cards, Comments} from "./models";



(async () => {
    await Films.sync({alter: true});
    await Users.sync({alter:true});
    await Cards.sync({alter:true});
    await Comments.sync({alter:true});
    await UsersCommentsRel.sync({alter:true});
    process.exit(0)
})()
