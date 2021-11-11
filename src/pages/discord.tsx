import React from 'react';
import DefaultLayout from "./layouts/DefaultLayout";
import { Link } from "gatsby";
import Button from "../components/Button";
import { OutboundLink } from "gatsby-plugin-google-analytics";

const DiscordPage = () => {
    return(
        <DefaultLayout>
            <div className="discord-page">
                <div className="gtp-discord-card">
                    <h1><span>Grow</span>Topics Discord</h1>
                    <p>Click the button below to go to our official discord server!</p>
                    <div className="gtp-discord-card__actions">
                        <OutboundLink href="https://discord.gg/2NaDrfV6MK">
                            <Button type="filled" label="Discord Server" />
                        </OutboundLink>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
};

export default DiscordPage;
