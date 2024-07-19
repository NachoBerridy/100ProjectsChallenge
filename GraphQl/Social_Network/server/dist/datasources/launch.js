import Sequelize from "sequelize";
import sequelize from "./connection.js";
sequelize
    .authenticate()
    .then(() => {
    console.log('Database connected');
})
    .catch((err) => {
    console.log('Unable to connect ', err);
});
const Books = sequelize.define('Books', {
    title: { type: Sequelize.STRING },
    author: { type: Sequelize.STRING },
});
export { Books };
