import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import React, { useState } from "react";
import { MenuCard } from "./MenuCard.js";
import { menuData } from "../data/menuData";

export const Menu = () => {
    const [searchField, setSearchField] = useState("");
    
    const filtered = menuData.filter((entry) => {
        return entry.name.toLowerCase().includes(searchField.toLowerCase()) || entry.ingredients.toString().toLowerCase().includes(searchField.toLowerCase());
    })

    return (
        <section className="menu" id="menu">
            <Container>
                <Row>
                    <Col>
                        <h2>Our Recipes!</h2>
                        <p>Here you can view our extensive range of recipes for all occasions.</p>
                        <Tab.Container id="menus-tabs" defaultActiveKey="first" >
                            <Nav variant="pills" className="nav-pills mb-4 justify-content-center align-items-center" id="pills-tab"> 
                                <Nav.Item>
                                    <Nav.Link eventKey="first">Starters</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Mains</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">Desserts</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <input
                                className="menu-searchbar"
                                type="text"
                                placeholder="Search Recipes or Ingredients..."
                                onChange={(e) => setSearchField(e.target.value)}
                            />
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                        filtered.map((menu, index) => {
                                            if (menu.category === "starter") {
                                                return (
                                                    <MenuCard 
                                                        key={index}
                                                        {...menu}
                                                    />
                                                )
                                            }
                                        }) 
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                        filtered.map((menu, index) => {
                                            if (menu.category === "main") {
                                                return (
                                                    <MenuCard 
                                                        key={index}
                                                        {...menu}
                                                    />
                                                )
                                            }
                                        }) 
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                        filtered.map((menu, index) => {
                                            if (menu.category === "desserts") {
                                                return (
                                                    <MenuCard 
                                                        key={index}
                                                        {...menu}
                                                    />
                                                )
                                            }
                                        }) 
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}