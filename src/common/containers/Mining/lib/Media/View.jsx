import React from 'react';

import Typography from 'src/common/components/Typography';
import Margin from 'src/common/components/Margin';
import Button from 'src/common/components/Button';
import Link from 'src/common/components/Link';
import { Row, Col } from 'src/common/components/Grid';

import Panel from 'src/common/components/Panel';

import { FormattedMessage } from 'react-intl';

import injectSheet from 'react-jss';
import styles from './styles';


import media from './media.json';



const Media = ({
    classes,
    onBrandingPackageClick
}) => (
        <div className={classes.root}>
            <Row>
                <Col xs={12}>
                    <Typography type="display3" align="center">
                        <FormattedMessage
                            id="company.media.title"
                            defaultMessage="Media"
                        />
                    </Typography>
                    <Margin bottom={4} />
                </Col>
            </Row>
            <Row>
                {media.map((contact, index) => (
                    <Col key={`media_org_${index}`} xs={12} sm={6} md={4}>
                        <a href={contact.url} target="_blank" className={classes.link}>
                            <Panel className={classes.media}>
                                <img src={contact.logo} className={classes.logo} alt="Media contact" />
                            </Panel>
                        </a>
                    </Col>
                ))}
            </Row>

            <Margin bottom={3} />

            <Row centered>
                <Col xs={12} md={8} lg={5} className={classes.contactUs}>
                    <Typography type="body2">
                        <FormattedMessage
                            id="company.media.contactUs"
                            defaultMessage="For all media inquiries, please {link} the Communications Team"
                            values={{
                                link: (
                                    <Link pseudo href="#contact">
                                        <FormattedMessage
                                            id="company.media.contactUsLink"
                                            defaultMessage="contact"
                                        />
                                    </Link>
                                )
                            }}
                        />
                    </Typography>

                    <Margin bottom={3} />

                    <Button
                        onClick={onBrandingPackageClick}
                        href="https://s3.ca-central-1.amazonaws.com/wavesdb.com/images/Waves_brand_pack_1.2.zip"
                        target="_blank"
                    >
                        <FormattedMessage
                            id="cta.brandingPackage"
                            defaultMessage="Branding package"
                        />
                    </Button>
                </Col>
            </Row>

        </div>
    );


export default injectSheet(styles)(Media);