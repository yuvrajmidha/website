import React, { useState } from 'react';
import {
    FormControl, FormLabel, Input, Button, ModalContent, ModalHeader, Spinner, Modal, ModalOverlay, Textarea, Tabs, TabPanels, TabList, TabPanel, Tab, Select, Box, Radio, RadioButtonGroup, RadioGroup, Collapse, ModalBody, Text
} from "@chakra-ui/react";
import deviceList from '../../deviceDetect.js';
import Toast from '../Toast/main';
import { useDisclosure } from "@chakra-ui/react";
import { deviceType, browserName, osName } from "react-device-detect";
import SVG from '../svg/SVG';
import axios from "axios";
import cookie from 'react-cookies'
import { FaArrowLeft } from 'react-icons/fa';
const CustomRadio = React.forwardRef((props, ref) => {
    const { isChecked, ...rest } = props;
    return (
        <Button
            ref={ref}
            colorScheme={isChecked ? "red" : "gray"}
            color={isChecked ? "light.500" : 'black.500'}
            aria-checked={isChecked}
            role="radio"
            height="120px"
            {...rest}
        />
    );
});

const deviceInfo = {
    browser: browserName,
    os: osName,
    device: deviceType
}
function ErrorForm(props) {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const [name, setName] = useState(cookie.load('name') ? cookie.load('name') : '');
    const [email, setEmail] = useState(cookie.load('email') ? cookie.load('email') : '');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState(cookie.load('phone') ? cookie.load('phone') : '');
    const [error, setError] = useState('');
    const [browser, setBrowser] = useState(deviceInfo.browser);
    const [device, setDevice] = useState(deviceInfo.device);
    const [operatingsystem, setOs] = useState(deviceInfo.os);
    const [othererror, setOtherInput] = useState('');
    const [rend, setRend] = useState(false);
    const [show, setShow] = useState(false);
    const [shown, setShown] = useState(cookie.load('name') ? false : true);
    const [showe, setShowe] = useState(cookie.load('email') ? false : true);
    const [showp, setShowp] = useState(cookie.load('phone') ? false : true);
    const [tabIndex, setTabIndex] = useState(0);
    const [activeButton, setActiveButton] = useState(deviceInfo.device);
    const [screenWidth, setScreenWidth] = useState(1000);
    let form = {
        name: name,
        email: email,
        description: description,
        contactNumber: phone,
        error: othererror ? othererror : error,
        browser: browser,
        device: device,
        operatingSystem: operatingsystem
    }
    const [isLoading, loadingState] = useState(false);
    const [formResponse, setResponse] = useState('');
    const onChange = (event) => {
        const target = event.target
        const fieldname = target.name
        const value = target.value
        switch (fieldname) {
            case 'name':
                setName(value);
                break;

            case 'description':
                setDescription(value);
                break;

            case 'phone':
                setPhone(value);
                break;

            case 'email':
                setEmail(value);
                break;

            case 'errortype':
                setError(value);
                break;

            case 'operatingsystem':
                setOs(value);
                break;

            case 'browser':
                setBrowser(value);
                break;

            case 'othererror':
                setOtherInput(value);
                break;

            default:
                break;
        }
    }
    const handleToggle = (param) => {
        setShow(param);
        setRend(param);
        setOtherInput('');
    }
    const refreshForm = (res) => {
        loadingState(false)
        console.log(res);
        setCookies();
        setResponse(res);
        setResponse('');
        setName(cookie.load('name') ? cookie.load('name') : '');
        setEmail(cookie.load('email') ? cookie.load('email') : '');
        setDescription('');
        setPhone(cookie.load('phone') ? cookie.load('phone') : '');
        setDevice(deviceInfo.device);
        setBrowser(deviceInfo.browser);
        setOs(deviceInfo.os);
        setActiveButton(deviceInfo.device);
        setError('');
        setOtherInput('');
        setShow(false);
        if (res.status == 200) {
            onClose();
        }
        setTabIndex(0);
    }
    const handleTabsChange = index => {
        setTabIndex(index);
    };
    const formClose = () => {
        setResponse('');
        setName('');
        setEmail('');
        setDescription('');
        setPhone('');
        setDevice(deviceInfo.device);
        setBrowser(deviceInfo.browser);
        setOs(deviceInfo.os);
        setActiveButton(deviceInfo.device);
        setError('');
        setOtherInput('');
        setShow(false);
        onClose();
        setTabIndex(0);
    }
    const setCookies = () => {
        cookie.save("name", name, { path: "/" });
        cookie.save("email", email, { path: "/" });
        cookie.save("phone", phone, { path: "/" });
    }
    const onSubmit = (event) => {
        event.preventDefault()
        loadingState(true);
        axios.post('/api/report/submit', form)
            .then((response) => refreshForm(response), error => refreshForm(error))
    }
    const updateWidth = () => {
        setScreenWidth(window.innerWidth);
    };
    React.useEffect(() => {
        updateWidth();
        window.addEventListener("resize", updateWidth);
        return () => window.removeEventListener("resize", updateWidth);
    });
    return (
        <>
            <Button mx={4} variant="unstyled" onClick={onOpen} colorScheme="white">Report an Error</Button>
            <Modal isOpen={isOpen} onClose={formClose} isCentered={screenWidth > 420 ? true : false} scrollBehavior={screenWidth > 420 ? "inside" : "outside"}>
                <ModalOverlay />
                <ModalContent maxWidth={["430px", "430px", "600px", "700px"]} maxHeight={screenWidth > 420 ? "700px" : ""} minHeight={screenWidth > 420 ? "" : "100vh"} mb={screenWidth <= 420 ? 0 : ""} mt={screenWidth <= 420 ? 0 : ""}>
                    <ModalHeader style={{ zIndex: "3", position: "sticky", top: 0, backgroundColor: "white" }}>
                        <Button verticalAlign="middle" leftIcon={<FaArrowLeft />} color="primary.500" variant="link" onClick={formClose}></Button>
                        <span className="display5 mx-2">Report an Error</span></ModalHeader>
                    <ModalBody>
                        <Box className="reportanerror">
                            <form onSubmit={onSubmit}>
                                <input
                                    type="hidden"
                                    name="_redirect"
                                />
                                <Tabs index={tabIndex} onChange={handleTabsChange} isFitted>
                                    <TabList>
                                        <Tab paddingX={["2px", "4px", "16px"]} fontSize={["sm", "md"]} className="display6 tab-selected"><div className="d-flex align-items-center button-tab">Type of error</div> </Tab>
                                        <Tab paddingX={["2px", "8px", "16px"]} fontSize={["sm", "md"]} className="display6 tab-selected"><div className="d-flex align-items-center button-tab">Device Details</div></Tab>
                                        <Tab paddingX={["2px", "4px", "16px"]} fontSize={["sm", "md"]} className="display6 tab-selected"><div className="d-flex align-items-center button-tab">Description</div></Tab>
                                    </TabList>
                                    <TabPanels className="container">
                                        <TabPanel>
                                            <FormControl mt={10} isRequired>
                                                <FormLabel htmlFor="name">Type of error:</FormLabel>
                                                <RadioGroup name="errortype" onChange={onChange} defaultValue={form.error}>
                                                    <Radio value="Page not responsive" onClick={() => handleToggle(false)}><Box fontSize={["md", "lg"]}>Page not responsive</Box></Radio>
                                                    <Radio value="Component not working" onClick={() => handleToggle(false)}><Box fontSize={["md", "lg"]}>Component not working</Box></Radio>
                                                    <Radio value="Site not loading properly" onClick={() => handleToggle(false)}><Box fontSize={["md", "lg"]}>Site not loading properly</Box></Radio>
                                                    <Radio value="Some Other Error" onClick={() => handleToggle(true)}><Box fontSize={["md", "lg"]}>Other</Box></Radio>
                                                </RadioGroup>
                                            </FormControl>
                                            {rend && <Collapse isOpen={show}>
                                                <FormControl mt={3} isRequired>
                                                    <Input value={form.othererror} variant="flushed" name="othererror" placeholder="Please specify if any other error" onChange={onChange}>
                                                    </Input>
                                                </FormControl>
                                            </Collapse>}
                                            <Button size="lg" colorScheme="primary" className="primary-btn" mt={8} mb={8} onClick={() => setTabIndex(1)}>Next</Button>
                                        </TabPanel>
                                        <TabPanel>
                                            <FormControl mt={10} isRequired>
                                                <FormLabel>Device you were using:</FormLabel>
                                                <RadioButtonGroup isInline spacing={4} name="devicetype" value={form.device} onChange={value => { setDevice(value); setActiveButton(value) }}>
                                                    <CustomRadio mt={[2, 2, 0]} className="col-sm-3 " value="mobile"><div className="d-flex flex-column"><SVG color={activeButton === "mobile" ? "light.500" : "black.500"} src="/assets/images/icons/library/devices/iphone-x.svg" /><div>Phone</div></div></CustomRadio>
                                                    <CustomRadio mt={[2, 2, 0]} className="col-sm-3 " value="tablet"><div className="d-flex flex-column"><SVG color={activeButton === "tablet" ? "light.500" : "black.500"} src="/assets/images/icons/library/devices/tablet.svg" /><div>Tablet</div></div></CustomRadio>
                                                    <CustomRadio mt={[2, 2, 0]} className="col-sm-3 " value="browser"><div className="d-flex flex-column"><SVG color={activeButton === "browser" ? "light.500" : "black.500"} src="/assets/images/icons/library/devices/imac.svg" /><div>PC</div></div></CustomRadio>
                                                </RadioButtonGroup>
                                            </FormControl>
                                            <FormControl mt={10} isRequired>
                                                <FormLabel>Browser you were using:</FormLabel>
                                                <Select name="browser" value={form.browser} onChange={onChange} variant="flushed">                     {deviceList.browsers.map(item => <option value={item}>{item}</option>)}
                                                </Select>
                                            </FormControl>
                                            <FormControl mt={10} isRequired>
                                                <FormLabel>Operating system you were using:</FormLabel>
                                                <Input list="os" listStylePos="inside" name="operatingsystem" value={form.operatingSystem} onChange={onChange} variant="flushed"></Input>
                                                <datalist id="os">
                                                    {deviceList.os.map(item => <option value={item}></option>)}
                                                </datalist>
                                            </FormControl>
                                            <Button size="lg" colorScheme="primary" className="primary-btn" mt={8} mb={8} onClick={() => setTabIndex(2)}>Next</Button>
                                        </TabPanel>
                                        <TabPanel>
                                            <FormControl isRequired mt={10} >
                                                <FormLabel htmlFor="name">Name:{!shown && <Text onClick={() => { setShown(true) }}>{name}</Text>}</FormLabel>
                                                {shown ? <Input
                                                    variant="flushed"
                                                    type="text"
                                                    name="name"
                                                    value={form.name}
                                                    onChange={onChange}
                                                /> : ''}
                                            </FormControl>
                                            <Box className="row" >
                                                <div className="col-md-6">
                                                    <FormControl isRequired mt={10}>
                                                        <FormLabel htmlFor="email">Email:{!showe && <Text onClick={() => { setShowe(true) }}>{email}</Text>}</FormLabel>
                                                        {showe ? <Input
                                                            variant="flushed"
                                                            type="email"
                                                            name="email"
                                                            value={form.email}
                                                            onChange={onChange}
                                                        /> : ''}
                                                    </FormControl>
                                                </div>
                                                <div className="col-md-6">
                                                    <FormControl isRequired mt={10} >
                                                        <FormLabel htmlFor="phone">Contact No:{!showp && <Text onClick={() => { setShowp(true) }}>{phone}</Text>}</FormLabel>
                                                        {showp ? <Input
                                                            type="tel"
                                                            pattern="[0-9]{10}"
                                                            variant="flushed"
                                                            name="phone"
                                                            value={form.contactNumber}
                                                            onChange={onChange}
                                                        /> : ''}
                                                    </FormControl>
                                                </div>
                                            </Box>
                                            <FormControl mt={10} isRequired>
                                                <FormLabel>Describe the error in detail:</FormLabel>
                                                <Textarea
                                                    resize={"vertical"}
                                                    variant="flushed"
                                                    size="lg"
                                                    name="description"
                                                    value={form.description}
                                                    onChange={onChange}
                                                />
                                            </FormControl>
                                            <div>
                                                <Button
                                                    mt={10}
                                                    mb={8}
                                                    type="submit"
                                                    size="lg"
                                                    colorScheme="primary"
                                                    className="primary-btn"
                                                >Submit{isLoading && <Spinner
                                                    thickness="4px"
                                                    speed="1s"
                                                    emptyColor="gray.200"
                                                    color="blue.500"
                                                    size="sm"
                                                />}
                                                </Button>
                                            </div>
                                        </TabPanel>
                                    </TabPanels>
                                </Tabs>
                            </form>
                        </Box>
                        {formResponse && <Toast response={formResponse} />}
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}
export default ErrorForm;