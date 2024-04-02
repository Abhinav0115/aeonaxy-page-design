import { useState } from "react";
import {
    IconButton,
    List,
    ListItem,
    Drawer,
    Card,
} from "@material-tailwind/react";

import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

import PropTypes from "prop-types";

export const SidebarWithBurgerMenu = ({ islogin }) => {
    SidebarWithBurgerMenu.defaultProps = {
        islogin: false,
    };

    SidebarWithBurgerMenu.propTypes = {
        islogin: PropTypes.bool.isRequired,
    };

    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const openDrawer = () => setIsDrawerOpen(true);
    const closeDrawer = () => setIsDrawerOpen(false);

    return (
        <>
            <IconButton
                variant="text"
                size="lg"
                onClick={openDrawer}
                className="text-black border-white "
            >
                <Bars3Icon className="h-8 w-8 stroke-2" />
            </IconButton>
            <Drawer
                placement="right"
                open={isDrawerOpen}
                onClose={closeDrawer}
                className="overflow-y-auto "
            >
                <Card
                    color="transparent"
                    shadow={false}
                    className="h-[calc(100vh-2rem)] w-full px-2 pb-4 "
                >
                    <div className="flex items-center justify-end">
                        <IconButton
                            variant="text"
                            size="md"
                            onClick={closeDrawer}
                            className="text-black border-white "
                        >
                            <XMarkIcon className="h-6 w-6 stroke-2" />
                        </IconButton>
                    </div>

                    <List className="">
                        <div className="">
                            <a
                                href="/"
                                onClick={closeDrawer}
                                className="text-black"
                            >
                                <ListItem className="">
                                    <span className="mx-4">Personal</span>
                                </ListItem>
                            </a>
                            <a
                                href="/"
                                onClick={closeDrawer}
                                className="text-black"
                            >
                                <ListItem>
                                    <span className="mx-4">Business</span>
                                </ListItem>
                            </a>
                            <a
                                href="/"
                                onClick={closeDrawer}
                                className="text-black"
                            >
                                <ListItem>
                                    <span className="mx-4">Developer</span>
                                </ListItem>
                            </a>
                            <a
                                href="/"
                                onClick={closeDrawer}
                                className="text-black"
                            >
                                <ListItem>
                                    <span className="mx-4">Help</span>
                                </ListItem>
                            </a>
                        </div>

                        <hr className="my-2 border-blue-gray-50" />

                        <div className="">
                            <a
                                href="/"
                                onClick={closeDrawer}
                                className="text-black"
                            >
                                <ListItem>
                                    <span className="mx-4">My PayPal</span>
                                </ListItem>
                            </a>
                            {islogin ? (
                                <a
                                    href="/"
                                    onClick={closeDrawer}
                                    className="text-black"
                                >
                                    <ListItem>
                                        <span className="mx-4">Log out</span>
                                    </ListItem>
                                </a>
                            ) : (
                                <a
                                    href="/"
                                    onClick={closeDrawer}
                                    className="text-black"
                                >
                                    <ListItem>
                                        <span className="mx-4">Log in</span>
                                    </ListItem>
                                </a>
                            )}
                        </div>
                    </List>
                </Card>
            </Drawer>
        </>
    );
};
