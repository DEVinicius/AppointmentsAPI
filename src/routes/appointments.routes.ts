import { Router } from "express";
import { v4 as uuid } from "uuid";

const appointmentRoute = Router();

var appointments = [];

appointmentRoute.post("/", (request, response) => {
    const { provider, date } = request.body;

    const appointment = {
        uuidv4(),
        provider,
        date,
    };

    appointments.push(appointment);

    return response.json({
        appointment
    });
});

export default appointmentRoute;
