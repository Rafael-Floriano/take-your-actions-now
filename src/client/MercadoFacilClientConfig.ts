import axios from "axios";

const mercadoFacilClient = axios.create({
    baseURL: 'https://37b4pnp5-5165.brs.devtunnels.ms'
});

export default mercadoFacilClient;
  