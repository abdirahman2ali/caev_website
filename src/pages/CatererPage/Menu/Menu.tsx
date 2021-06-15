import React from "react";
import Typography from "@material-ui/core/Typography";
import { Section } from "./Section";
import { Item } from "./Item";
import { IItem } from "../../../utils";
import axios from "axios";

export class Menu extends React.Component<{ restaurant_id: string }, any> {
  state = {
    menu: [],
  };

  async componentDidMount() {
    let menu = await this.getMenu();
    //console.log(menu);
    this.setState({ ...this.state, menu: menu });
  }

  async getMenu() {
    /* let data = {
            restaurant_id:this.props.restaurant_id,
          }
          */

    return await axios({
      method: "GET",
      url: "https://caevapi.com/api/menuitem",
      data: {
        restaurant_id: this.props.restaurant_id,
      },
    })
      .then((response: any) => {
        return response.data;
      })
      .catch((error: any) => {
        console.log(error);
      });
  }

  render() {
    return (
      <React.Fragment>
        <Typography
          variant="h3"
          component="h3"
          align="center"
          className="f500"
          style={{ marginBottom: "30px" }}
        >
          {" "}
          View Our
          <span className="red"> Menu</span>
        </Typography>

        <Section title="All">
          {this.state.menu.map((item: IItem, index:number) => {
            return (
              <Item
                title={item.menu_item_name}
                price={item.price}
                description={item.description}
                full_item={item}
                key={index}
              />
            );
          })}
        </Section>
      </React.Fragment>
    );
  }
}
