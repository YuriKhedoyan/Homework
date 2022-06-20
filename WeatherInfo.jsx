import React, { useState } from 'react';
import '../Assets/style.css'
import Container from '@mui/material/Container';
import Alert from '@mui/material/Alert'
import Footer from '../Layout/Footer';
import Grid from '@mui/material/Grid';
import Select from '@mui/material/Select';
import CircularProgress from '@mui/material/CircularProgress';
import InvertColorsIcon from '@mui/icons-material/InvertColors';
import CompressIcon from '@mui/icons-material/Compress';
import VisibilityIcon from '@mui/icons-material/Visibility';
import MemoryIcon from '@mui/icons-material/Memory';
import AirIcon from '@mui/icons-material/Air';
import DeviceThermostatIcon from '@mui/icons-material/DeviceThermostat';
import SearchIcon from '@mui/icons-material/Search';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { Link } from 'react-router-dom';
import PublicIcon from '@mui/icons-material/Public';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const { REACT_APP_WEATHER_API, REACT_APP_WEATHER_API_KEY, REACT_APP_WEATHER_ICON_API } = process.env;

function WeatherInfo() {
  const [data, setData] = useState("Yerevan");
  const [open, setOpen] = useState(true);
  const [weather, setWeather] = useState({});
  const [isCelsius, setCelsius] = useState(true);
  const [degree, setDegree] = useState('C')
  const [loading, setLoading] = useState(false);
  const url = `${REACT_APP_WEATHER_API}/data/2.5/weather?q=${data}&appid=${REACT_APP_WEATHER_API_KEY}`;
  const iconUrl = `${REACT_APP_WEATHER_ICON_API}/img/wn/${weather?.weather?.[0].icon}@2x.png`


  const changeInput = e => setData(e.target.value);

  const [expanded, setExpanded] = useState(false);

  // const handleChange = panel => isExpanded => setExpanded(isExpanded ? panel : false);


  let americasPartOne = {
    "Antigua and Barbuda": " | English",
    "Argentina": " | Español",
    "Bahamas": " | English",
    "Barbados": " | English",
    "Belize": " | English",
    "Bolivia": " | Español",
    "Brazil": " | Português",
    "Canada": " | English",
    "Canada": " | Français",
    "Chile": " | Español",
    "Colombia": " | Español",
    "Costa Rica": " | Español",
    "Dominica": "English",
  }
  let americasPartTwo = {
    "Dominican Republic": " | Español",
    "Ecuador": " | Español",
    "El Salvador": " Español",
    "Grenada": " | English",
    "Guatemala": " | Español",
    "Guyana": " | English",
    "Haiti": " | Français",
    "Honduras": " | Español",
    "Jamaica": " | English",
    "Mexico": " | Español",
    "Nicaragua": " | Español",
    "Panama": " | Español",
    "Panama": " | English",
  }

  let americasPartThree = {
    "Paraguay": " | Español",
    "Peru": " | Español",
    "St. Kitts and Nevis": " | English",
    "St. Lucia": " | English",
    "St. Vincent and the Grenadines": " | English",
    "Suriname": " | Nederlands",
    "Trinidad and Tobago": " | English",
    "Uruguay": " | Español",
    "United States": " | English",
    "United States": " | Español",
    "Venezuela": " | Español",
  }

  let africaPartOne = {
    "Algeria": " | العربية",
    "Algeria": " | Français",
    "Angola": " | Português",
    "Benin": " | Français",
    "Burkina Faso": " | Français",
    "Burundi": " | Français",
    "Cameroon": " | Français",
    "Cameroon": " | English",
    "Cape Verde": " | Português",
    "Central African Republic": " | Français",
    "Chad": " | Français",
    "Chad": " | العربية",
    "Comoros": " | Français",
    "Comoros": " | العربية",
    "Democratic Republic of the Congo": " | Français",
    "Republic of Congo": " | Français",
    "Côte d'Ivoire": " | Français",
    "Djibouti": " | Français",
    "Djibouti": " | العربية",
    "Egypt": " | العربية",
    "Equatorial Guinea": " | Español",
  }
  let africaPartTwo = {
    "Eritrea": " | العربية",
    "Gabon": " | Français",
    "Gambia": " | English",
    "Ghana": " | English",
    "Guinea": " | Français",
    "Guinea-Bissau": " | Português",
    "Kenya": " | English",
    "Lesotho": " | English",
    "Liberia": " | English",
    "Libya": " | العربية",
    "Madagascar": " | Français",
    "Mali": " | Français",
    "Mauritania": " | العربية",
    "Mauritius": " | English",
    "Mauritius": " | Français",
    "Morocco": " | العربية",
    "Morocco": " | Français",
    "Mozambique": " | Português",
  }
  let africaPartThree = {
    "Namibia": " | English",
    "Niger": " | Français",
    "Nigeria": " | English",
    "Rwanda": " | Français",
    "Rwanda": " | English",
    "Sao Tome and Principe": " | Português",
    "Senegal": " | Français",
    "Sierra Leone": " | English",
    "Somalia": " | العربية",
    "South Africa": " | English",
    "South Sudan": " | English",
    "Sudan": " | العربية",
    "Swaziland": " | English",
    "Tanzania": " | English",
    "Togo": " | Français",
    "Tunisia": " | العربية",
    "Uganda": " | English",
  }

  let asiaPacficPartOne = {
    "Australia": " | English",
    "Bangladesh": " | বাংলা",
    "Brunei": " | Bahasa Melayu",
    "China": " | 中文",
    "Hong Kong SAR": " | 中文",
    "East Timor": " | Português",
    "Fiji": " | English",
    "India": " | English",
    "India": " | हिन्दी",
    "Indonesia": " | Bahasa Indonesia",
    "Japan": " | 日本語",
  }

  let asiaPacficPartTwo = {
    "Kiribati": " | English",
    "South Korea": " | 한국어",
    "Kyrgyzstan": " | Русский",
    "Malaysia": " | Bahasa Melayu",
    "Marshall Islands": " | English",
    "Micronesia": " | English",
    "New Zealand": " | English",
    "Palau": " | English",
    "Philippines": " | English",
    "Philippines": " | Tagalog",
    "Samoa": " | English",
  }

  let asiaPacficPartThree = {
    "Singapore": " | English",
    "Singapore": " | 中文",
    "Solomon Islands": " | English",
    "Taiwan": " | 中文",
    "Thailand": " | ไทย",
    "Tonga": " | English",
    "Tuvalu": " | English",
    "Vanuatu": " | English",
    "Vanuatu": " | Français",
    "Vietnam": " | Tiếng Việt",
  }

  let europePartOne = {
    "Andorra": " | Català",
    "Andorra": " | Français",
    "Austria": " | Deutsch",
    "Belarus": " | Русский",
    "Belgium": " | Dutch",
    "Belgium": " | Français",
    "Bosnia and Herzegovina": " | Hrvatski",
    "Croatia": " | Hrvatski",
    "Cyprus": " | Ελληνικά",
    "Czech Republic": " | Čeština",
    "Denmark": " | Dansk",
    "Estonia": " | Русский",
    "Estonia": " | Eesti",
    "Finland": " | Suomi",
    "France": " | Français",
    "Germany": " | Deutsch",
  }
  let europePartTwo = {
    "Greece": " | Ελληνικά",
    "Hungary": " | Magyar",
    "Ireland": " | English",
    "Italy": " | Italiano",
    "Liechtenstein": " | Deutsch",
    "Luxembourg": " | Français",
    "Malta": " | English",
    "Monaco": " | Français",
    "Netherlands": " | Nederlands",
    "Norway": " | Norsk",
    "Poland": " | Polski",
    "Portugal": " | Português",
  }
  let europePartThree = {
    "Romania": " | Română",
    "Russia": " | Русский",
    "San Marino": " | Italiano",
    "Slovakia": " | Slovenčina",
    "Spain": " | Español",
    "Spain": " | Català",
    "Sweden": " | Svenska",
    "Switzerland": " | Deutsch",
    "Turkey": " | Turkçe",
    "Ukraine": " | Українська",
    "United Kingdom": " | English",
    "State of Vatican City (Holy See)": "| Italiano",
  }

  let middleEastPartOne = {
    "Bahrain": " | العربية",
    "Iran": " | فارسى",
    "Iraq": " | العربية",
    "Israel": " | עִבְרִי",
    "Jordan": " | العربي",
  }
  let middleEastPartTwo = {
    "Kuwait": " | العربية",
    "Lebanon": " | العربية",
    "Oman": " | العربية",
    "Pakistan": " | اردو",
    "Pakistan": " | English",
  }
  let middleEastPartThree = {
    "Qatar": " | العربية",
    "Saudi Arabia": "| لعربية",
    "Syria": " | العربية",
    "United Arab Emirates": " | العربية"
  }
  const handleSubmit = async (e) => {
    setOpen(true);
    setLoading(true);

    e.preventDefault();

    const response = await fetch(url);
    const result = await response.json();

    setWeather(result);
    setData("");
    setTimeout(() => setOpen(false), 3000);
    setLoading(false);
  }

  const convertCelsius = num => {
    num = Math.ceil((num - 273.15) * 9 / 5 + 32);
    return Math.ceil((num - 32) / 1.8)
  }

  const convertFahrenheit = num => {
    num = num - 273.15;
    return Math.ceil((num * 1.8) + 32);
  }

  const handleChangeC = () => {
    setDegree("C");
    setCelsius(true);
  };

  const handleChangeF = () => {
    setDegree("F");
    setCelsius(false);
  };

  return (
    <>
      <div className="topnav" id="myTopnav">
        <Grid container spacing={3}>
          <Grid item md={4}>
            <svg set="nav" name="twc-logo" theme="light" className="MainMenuHeader--twcLogo--1oRKo Icon--icon--3wCKh Icon--lightTheme--3NMAI" id="icon" data-testid="Icon" aria-hidden="true" role="img" viewBox="0 0 24 24"><title>The Weather Channel</title><path d="M0 0h24v24H0V0zm2.0433 6.807v.657h.9629v3.2794h.8043V7.464h.9402l.1303-.657H2.0433zm3.0982-.0794c.034.119.0567.3908.0567.6627v3.3531h.7703V8.6647c.1699-.1529.4134-.2662.6003-.2662.2153 0 .2946.1076.2946.3965v1.9484h.742V8.7157c0-.3285-.017-.3738-.0737-.538-.0906-.2436-.3965-.4136-.7533-.4136-.2945 0-.623.1246-.8213.3116 0-.034.0114-.153.0114-.2436v-.5777c0-.2776-.017-.5494-.051-.708l-.776.1812zm5.1655 3.2455c-.2322.1926-.4758.2889-.7363.2889-.3908 0-.6117-.2549-.6117-.7024V9.537h1.6765v-.1756c0-.606-.119-.9969-.3851-1.2687-.187-.1926-.5041-.3059-.8383-.3059-.3852 0-.674.1246-.9119.3908-.2549.2832-.3625.6287-.3625 1.1498 0 .912.538 1.501 1.3707 1.501.4078 0 .759-.1303 1.0931-.4022l-.2945-.453zm-8.241 2.1964l.9402 3.9704h.9005l.323-1.6142c.1132-.5778.1925-1.1328.1925-1.1328.0057.034.051.5324.1869 1.1441l.3512 1.6029h.8666l.9515-3.9704h-.8326l-.3228 1.4952c-.068.3286-.204 1.1838-.2153 1.3084 0 0-.0963-.674-.1699-1.0421l-.3625-1.7615h-.8666l-.3512 1.5915c-.1189.5438-.1869 1.1045-.2039 1.2575 0 0-.0453-.5608-.2095-1.2971l-.3399-1.552H2.066zm7.0172 3.1661c-.2322.1926-.4758.289-.7363.289-.3908 0-.6117-.255-.6117-.7024v-.0227h1.6765v-.1756c0-.606-.119-.9968-.3851-1.2687-.187-.1926-.5041-.3059-.8383-.3059-.3851 0-.674.1246-.9119.3908-.2549.2832-.3625.6287-.3625 1.1498 0 .912.538 1.501 1.3707 1.501.4078 0 .759-.1303 1.0931-.4021l-.2945-.4532zm.742-1.7841l.3228.5437c.3115-.2095.5947-.3285.8383-.3285.2775 0 .3398.1076.3398.4305v.119c-.0792-.0058-.1132-.0058-.1699-.0058-.9232 0-1.3933.3172-1.3933.9969 0 .5777.3511.9063.9968.9063.238 0 .4418-.0567.5834-.1586.0567-.0397.068-.051.1756-.153.0737.1473.2323.2776.4078.3512l.4022-.4644c-.221-.1643-.2719-.2833-.2719-.5948v-.051l.017-.9742c0-.3115-.0113-.402-.051-.521-.1133-.3229-.4474-.5041-.9345-.5041-.2663 0-.5098.051-.793.1699-.204.0793-.2832.119-.4701.2379zm4.4009-.3512h-.6797c0-.2945.017-.606.0453-.8723l-.7703.1926c-.0283.2152-.0283.4078-.0283.691h-.2889v.4928h.2889v1.5973c0 .2661.0056.3228.051.4474.085.2549.3964.4248.7816.4248.1982 0 .3965-.0396.6174-.1303l-.0964-.453c-.1359.0396-.2038.0566-.2718.0566-.2606 0-.3285-.0963-.3285-.4645v-1.4783h.4871l.1926-.5041zm.2095-1.1101c.034.1189.0566.3908.0566.6626v3.3531h.7703v-2.0787c.17-.1529.4135-.2662.6004-.2662.2152 0 .2945.1077.2945.3965v1.9484h.742v-2.0277c0-.3285-.017-.3738-.0736-.538-.0907-.2436-.3965-.4135-.7533-.4135-.2946 0-.623.1246-.8213.3115 0-.034.0113-.153.0113-.2435v-.5778c0-.2775-.017-.5494-.051-.708l-.776.1813zm5.1654 3.2454c-.2322.1926-.4757.289-.7363.289-.3908 0-.6117-.255-.6117-.7024v-.0227h1.6765v-.1756c0-.606-.1189-.9968-.385-1.2687-.187-.1926-.5042-.3059-.8383-.3059-.3852 0-.674.1246-.912.3908-.2548.2832-.3625.6287-.3625 1.1498 0 .912.5381 1.501 1.3707 1.501.4078 0 .759-.1303 1.0932-.4021l-.2946-.4532zm.7817-2.0163c.0623.1642.1076.4587.1076.8495v1.9371h.759v-2.0503c.1415-.1643.2945-.2436.4644-.2436.085 0 .1472.017.2209.0567l.2096-.6684c-.119-.051-.17-.0623-.2833-.0623-.085 0-.1869.017-.2492.0453-.1415.068-.3228.221-.4304.3682-.0113-.1643-.051-.2945-.119-.4135l-.6796.1813zM4.9489 17.7585c-.2152-.1869-.606-.3115-.9968-.3115-.6344 0-1.2008.3399-1.5067.912-.1812.3398-.2662.7306-.2662 1.2233 0 .5778.1586 1.0536.4758 1.4104.3229.3682.742.5437 1.2857.5437.4475 0 .7817-.1132 1.0932-.3681l-.3625-.4985a3.6136 3.6136 0 0 1-.0793.0624c-.1926.1302-.3795.1925-.5947.1925-.3399 0-.6004-.1529-.759-.4418-.119-.2152-.1642-.5154-.1642-1.0535 0-.4588.068-.7873.2209-1.0138.1416-.2096.402-.3399.6683-.3399.2209 0 .4305.0737.6287.221l.3568-.5382zm.3908-.3058c.034.119.0566.3908.0566.6627v3.353h.7703v-2.0786c.17-.153.4135-.2662.6004-.2662.2152 0 .2945.1076.2945.3964v1.9485h.742v-2.0277c0-.3286-.017-.3739-.0736-.5381-.0906-.2436-.3965-.4135-.7533-.4135-.2946 0-.623.1246-.8213.3115 0-.034.0113-.153.0113-.2435v-.5778c0-.2775-.017-.5494-.051-.708l-.776.1813zm3.0755 1.4613l.3228.5437c.3115-.2095.5947-.3285.8383-.3285.2775 0 .3398.1077.3398.4305v.119c-.0793-.0057-.1133-.0057-.17-.0057-.9231 0-1.3932.3171-1.3932.9968 0 .5778.3511.9063.9968.9063.2379 0 .4418-.0567.5834-.1586.0566-.0397.068-.051.1756-.153.0736.1473.2322.2776.4078.3512l.4021-.4644c-.2209-.1643-.2718-.2832-.2718-.5947v-.051l.017-.9742c0-.3116-.0114-.4022-.051-.5211-.1133-.3229-.4475-.5041-.9346-.5041-.2662 0-.5097.051-.793.17-.2038.0792-.2831.1189-.47.2378zm2.8546-.2266c.068.1926.102.4305.102.6797v2.1014h.7589V19.418c.1756-.1586.3738-.2606.5267-.2606.1983 0 .255.0963.255.4248v1.8862h.7476V19.35c0-.1812-.017-.3058-.0567-.4134-.0906-.2493-.3738-.4192-.6966-.4192-.17 0-.3682.0453-.5211.1246-.1246.068-.1586.0907-.3342.2152 0-.1189-.0397-.2435-.1076-.3624l-.674.1925zm3.0188 0c.068.1926.102.4305.102.6797v2.1014h.759V19.418c.1755-.1586.3737-.2606.5267-.2606.1982 0 .2549.0963.2549.4248v1.8862h.7476V19.35c0-.1812-.017-.3058-.0566-.4134-.0906-.2493-.3739-.4192-.6967-.4192-.17 0-.3681.0453-.521.1246-.1247.068-.1587.0907-.3342.2152 0-.1189-.0397-.2435-.1077-.3624l-.674.1925zm5.0806 2.0108c-.2323.1925-.4758.2888-.7364.2888-.3908 0-.6117-.2548-.6117-.7023v-.0226h1.6766v-.1757c0-.606-.119-.9968-.3852-1.2687-.1869-.1926-.504-.3058-.8382-.3058-.3852 0-.674.1246-.912.3908-.2548.2832-.3625.6287-.3625 1.1497 0 .912.5381 1.501 1.3707 1.501.4078 0 .759-.1302 1.0932-.4021l-.2945-.4531zm1.5859-3.421l-.776.1755c.0283.2605.0397.4927.0397.8722v2.1637c0 .4135.0113.504.068.6513.0905.2436.3511.3965.674.3965.1642 0 .3228-.0283.453-.0792l-.1302-.4532c-.0396.0113-.0566.0113-.085.0113-.0623 0-.1246-.0283-.1529-.0792-.0453-.0793-.051-.1473-.051-.6458v-2.2599c0-.4078-.0113-.5947-.0396-.7533zM8.9703 8.9818h.878v-.034c0-.2152-.0227-.3285-.0907-.4361-.0736-.1133-.1813-.17-.3342-.17-.2888 0-.453.2266-.453.6288v.0113zm-1.2238 5.3625h.878v-.034c0-.2152-.0227-.3285-.0907-.436-.0736-.1134-.1812-.17-.3342-.17-.2888 0-.4531.2266-.4531.6287v.0113zm3.5683.4928h-.034c-.5267 0-.708.0963-.708.4418 0 .2265.1416.3795.3342.3795.1416 0 .2832-.0737.3965-.1983l.0113-.623zm6.9495-.4928h.878v-.034c0-.2152-.0227-.3285-.0907-.436-.0736-.1134-.1812-.17-.3341-.17-.2889 0-.4532.2266-.4532.6287v.0113zm-8.3595 5.8553h-.034c-.5268 0-.708.0963-.708.4418 0 .2266.1416.3795.3342.3795.1416 0 .2832-.0736.3965-.1982l.0113-.623zm8.1277-.4927h.8779v-.034c0-.2153-.0227-.3285-.0906-.4361-.0737-.1133-.1813-.17-.3342-.17-.2889 0-.4531.2266-.4531.6287v.0114z" fill="currentColor" fillRule="evenodd"></path></svg>
            <img className="nameImg" src="data:image/png;base64,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" alt="" />
          </Grid>
          <Grid item md={4}>
            <form onSubmit={handleSubmit}>
              <input type="textbox" value={data} onChange={changeInput} className='searchInput' placeholder='Write city name' />
              <button type='submit' className="searchIcon"><SearchIcon></SearchIcon></button>
            </form>
          </Grid>
          <Grid item md={4}>
            <span id="select">
              <PublicIcon className='publicIcon'></PublicIcon>
              <p className='selectItem'>US | {degree}</p>
              <Select value={degree} className="selection">
                <div className='menu'>
                  <Container>
                    <span className='menuItems'>
                      <ButtonGroup size="large" aria-label="large button group">
                        <Button onClick={handleChangeC}>C</Button>
                        <Button onClick={handleChangeF}>F</Button>
                        <Button>Other</Button>
                      </ButtonGroup>
                    </span>
                    <div>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                          <Typography>AMERICAS</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className='typography'>
                            <Container className="items">
                              <ul className='language'>
                                {Object.entries(americasPartOne).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <br></br>
                              <ul className='language'>
                                {Object.entries(americasPartTwo).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <br></br>
                              <ul className='language'>
                                {Object.entries(americasPartThree).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                            </Container>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>

                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2a-content" id="panel2a-header" >
                          <Typography>AFRICA</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className='typography'>
                            <Container className="items">
                              <ul className='language'>
                                {Object.entries(africaPartOne).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <ul className='language'>
                                {Object.entries(africaPartTwo).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <ul className='language'>
                                {Object.entries(africaPartThree).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                            </Container>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3a-content" id="panel3a-header" >
                          <Typography>ASIA PACIFIC</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className='typography'>
                            <Container className="items">
                              <ul className='language'>
                                {Object.entries(asiaPacficPartOne).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <ul className='language'>
                                {Object.entries(asiaPacficPartTwo).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <ul className='language'>
                                {Object.entries(asiaPacficPartThree).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                            </Container>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4a-content" id="panel4a-header" >
                          <Typography>EUROPE</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className='typography'>
                            <Container className="items">
                              <ul className='language'>
                                {Object.entries(europePartOne).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <ul className='language'>
                                {Object.entries(europePartTwo).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <ul className='language'>
                                {Object.entries(europePartThree).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                            </Container>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                      <Accordion>
                        <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel5a-content" id="panel5a-header" >
                          <Typography>MIDDLE EAST</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography className='typography'>
                            <Container className="items">
                              <ul className='language'>
                                {Object.entries(middleEastPartOne).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <ul className='language'>
                                {Object.entries(middleEastPartTwo).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                              <ul className='language'>
                                {Object.entries(middleEastPartThree).map(el => el).map(el => <><li>{el}</li><br></br></>)}
                              </ul>
                            </Container>
                          </Typography>
                        </AccordionDetails>
                      </Accordion>
                    </div>
                  </Container>
                </div>
              </Select>
            </span>
          </Grid>
        </Grid>
        <br></br>
      </div>
      <div className="history">
        <Container>
          <Grid container spacing={4} id="grid">
            <Grid item md={3} id='gridItemRU'>
              <p>18° Moscow RU</p>
            </Grid>
            <Grid item md={3} id='gridItemAM'>
              <p>27° Yerevan AM</p>
            </Grid>
            <Grid item md={3} id='gridItemNW'>
              <p>26° New York</p>
            </Grid>
            <Grid item md={3} id='gridItemLA'>
              <p>26° Los Angeles</p>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className='header'>
        <Container>
          <Link to='/' className='links'>Today</Link>
          <Link to='/HourlyWeather' className='links'>Hourly forecast</Link>
          <Link to='/' className='links'>For 10 days</Link>
          <Link to='/' className='links'>Weekends</Link>
          <Link to='/' className='links'>For a month</Link>
          <Link to='/' className='links'>Radar</Link>
        </Container>
      </div>

      <br></br>

      <Container maxWidth="lg">
        {loading ? <CircularProgress /> : <></>}
        {weather.cod === '404' || weather.cod === '400' ? <Alert variant="filled" severity="error"><p>Wrong, please write name of the city</p></Alert> : Object.values(weather).length === 0 ? <p>Please write country name</p> : (
          <>
            {open === true ? <Alert variant="filled" severity="success"> Success !</Alert> : <></>}
            <div className="mainDiv">
              <h2>{weather.name}</h2>
              <div className="info">
                <div className='country'><h3>{weather.name} {weather?.sys?.country}</h3></div>
                <div className="main">
                  <Grid container spacing={2}>
                    <Grid item md={10}>
                      <p className='temp'>{isCelsius ? convertCelsius(weather?.main?.temp) : convertFahrenheit(weather?.main?.temp)}°</p>
                      <h4>{weather?.weather?.[0].main}</h4>
                      <h4>{weather?.weather?.[0].description}</h4>
                    </Grid>
                    <Grid item md={2}>
                      <img src={iconUrl} alt="" id='weatherIcon' />
                    </Grid>
                  </Grid>
                </div>
                <div className='otherInfo'>
                  <h3>{weather.name} {weather?.sys?.country}</h3>
                  <Grid container spacing={4}>
                    <Grid item sm={3}>
                      <p>Temp</p>
                      <div>
                        {isCelsius ? <h1>{convertCelsius(weather?.main?.temp)}°  </h1> : <h1>{convertFahrenheit(weather?.main?.temp)}°</h1>}
                      </div>
                    </Grid>

                    <Grid item sm={3}>
                      <p>Max Temp</p>
                      <div>
                        <h1>{isCelsius ? <b>{convertCelsius(weather?.main?.temp_max)}°</b> : <b>{convertFahrenheit(weather?.main?.temp_max)}°</b>} </h1>
                      </div>
                    </Grid>

                    <Grid item sm={3}>
                      <p>Min Temp</p>
                      <div>
                        <h1>{isCelsius ? <b>{convertCelsius(weather?.main?.temp_min)}°</b> : <b>{convertFahrenheit(weather?.main?.temp_min)}°</b>} </h1>
                      </div>
                    </Grid>

                    <Grid item sm={3}>
                      <p>Feels Like</p>
                      <div>
                        <h1>{isCelsius ? <b>{convertCelsius(weather?.main?.feels_like)}°</b> : <b>{convertFahrenheit(weather?.main?.feels_like)}°</b>} </h1>
                      </div>
                    </Grid>
                  </Grid>
                </div>
                <div className='moreInfo'>
                  Weather today in <b>{weather.name}</b>
                  <h1 title='Feels like'>{isCelsius ? <b>{convertCelsius(weather?.main?.feels_like)}°</b> : <b>{convertFahrenheit(weather?.main?.feels_like)}°</b>} </h1>
                  <div>
                    <Grid container spacing={2} className="mainGrid">
                      <Grid item sm={6}>
                        <Grid container spacing={2} className='about'>
                          <Grid item sm={10} className="grid1">
                            <DeviceThermostatIcon className='temperature'></DeviceThermostatIcon>
                            <p className="texts">Max/Min</p>
                          </Grid>
                          <Grid item sm={1} className="grid2">
                            {isCelsius ? <b>{convertCelsius(weather?.main?.temp_max)}°</b> : <b>{convertFahrenheit(weather?.main?.temp_max)}°</b>} / {isCelsius ? <b>{convertCelsius(weather?.main?.temp_min)}°</b> : <b>{convertFahrenheit(weather?.main?.temp_min)}°</b>}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={6}>
                        <Grid container spacing={2} className='about'>
                          <Grid item sm={10} className="grid1">
                            <AirIcon className='temperature'></AirIcon>
                            <p className="texts">Wind</p>
                          </Grid>
                          <Grid item sm={1} className="grid2">
                            {<b>{weather?.wind?.speed}</b>}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} className="mainGrid">
                      <Grid item sm={6}>
                        <Grid container spacing={2} className='about'>
                          <Grid item sm={10} className="grid1">
                            <InvertColorsIcon className='temperature'></InvertColorsIcon>
                            <p className="texts">Humidity</p>
                          </Grid>
                          <Grid item sm={1} className="grid2">
                            {<b>{weather?.main?.humidity}</b>}%
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={6}>
                        <Grid container spacing={2} className='about'>
                          <Grid item sm={10} className="grid1">
                            <InvertColorsIcon className='temperature'></InvertColorsIcon>
                            <p className="texts">Dew Point</p>
                          </Grid>
                          <Grid item sm={1} className="grid2">
                            <b>13°</b>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} className="mainGrid">
                      <Grid item sm={6}>
                        <Grid container spacing={2} className='about'>
                          <Grid item sm={10} className="grid1">
                            <CompressIcon className='temperature'></CompressIcon>
                            <p className="texts">Pressure</p>
                          </Grid>
                          <Grid item sm={1} className="grid2">
                            {<b>{weather?.main?.pressure}</b>}%
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={6}>
                        <Grid container spacing={2} className='about'>
                          <Grid item sm={10} className="grid1">
                            <MemoryIcon className='temperature'></MemoryIcon>
                            <p className="texts">UV Level</p>
                          </Grid>
                          <Grid item sm={1} className="grid2">
                            <b>3/10</b>
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>

                    <Grid container spacing={2} className="mainGrid">
                      <Grid item sm={6}>
                        <Grid container spacing={2} className='about'>
                          <Grid item sm={10} className="grid1">
                            <VisibilityIcon className='temperature'></VisibilityIcon>
                            <p className="texts">Visibility</p>
                          </Grid>
                          <Grid item sm={1} className="grid2">
                            {<b>{weather.visibility}</b>}
                          </Grid>
                        </Grid>
                      </Grid>
                      <Grid item sm={6}>
                        <Grid container spacing={2} className='about'>
                          <Grid item sm={10} className="grid1">
                            <AccessTimeIcon className='temperature'></AccessTimeIcon>
                            <p className="texts">Time Zone</p>
                          </Grid>
                          <Grid item sm={2} className="grid2">
                            {<b>{weather.timezone}</b>}
                          </Grid>
                        </Grid>
                      </Grid>
                    </Grid>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </Container>
      <Container maxWidth="vlg">
        <Footer />
      </Container>
    </>
  );
}

export default WeatherInfo;