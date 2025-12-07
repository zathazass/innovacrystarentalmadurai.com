"use client";

import React, { useState } from "react";
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectTrigger,
  SelectContent,
  SelectItem,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { motion } from "framer-motion";
import {
  Phone,
  Car,
  MapPin,
  ArrowRight,
  Clock,
  Shield,
  Star,
  CheckCircle2,
  Users,
  Luggage,
} from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Info } from "@/lib/constants/information";

export default function OneWayBooking() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [vehicle, setVehicle] = useState("");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [notes, setNotes] = useState("");
  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");

  const vehicleTypes = [
    { id: "sedan", name: "Sedan", capacity: "4 + 1 passengers" },
    { id: "innova", name: "SUV", capacity: "6 + 1 passengers" },
  ];

  const locations = [
    "Madurai",
    "Rameshwaram",
    "Kodaikanal",
    "Chennai",
    "Coimbatore",
    "Trichy",
    "Bangalore",
    "Theni",
  ];

  const features = [
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Verified drivers and insured vehicles",
    },
    {
      icon: Clock,
      title: "24/7 Service",
      description: "Available round the clock for your convenience",
    },
    {
      icon: Star,
      title: "Best Price",
      description: "Guaranteed lowest rates with no hidden charges",
    },
    {
      icon: Users,
      title: "Expert Drivers",
      description: "Experienced and professional chauffeurs",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedDate = date ? format(date, "PPP") : "";
    const message = `
*New One-Way Taxi Booking*
----------------------------------
*Name:* ${name}
*Phone:* ${phone}
*From:* ${from}
*To:* ${to}
*Vehicle:* ${vehicle}
*Travel Date:* ${formattedDate}
*Pickup Time:* ${time}
----------------------------------
  `;

    const whatsappURL = `https://wa.me/${Info?.contact?.whatsapp}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-grey-300 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            One Way Taxi Service
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comfortable and affordable one-way taxi services from Madurai to
            major destinations
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            {/* Why Choose Us */}
            <Card className="rounded-2xl shadow-lg border-0">
              <CardHeader>
                <h2 className="text-2xl font-bold text-gray-900">
                  Why Choose Our One Way Service?
                </h2>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {features.map((feature, index) => (
                    <motion.div
                      key={feature.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                      className="flex items-start gap-4 p-4 rounded-lg bg-white hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <feature.icon className="w-6 h-6 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">
                          {feature.title}
                        </h3>
                        <p className="text-sm text-gray-600">
                          {feature.description}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Right Booking Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:sticky lg:top-8 lg:h-fit"
          >
            <Card className="rounded-2xl shadow-xl border-0 bg-white/80 backdrop-blur-sm">
              <CardHeader className="text-center pb-2">
                <h1 className="text-2xl font-bold text-gray-900">
                  Book One Way Taxi
                </h1>
                <p className="text-gray-600">Quick & easy booking process</p>
              </CardHeader>

              <Separator className="my-0.5" />

              <CardContent className="pt-4">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-4">
                    <div>
                      <Label
                        htmlFor="name"
                        className="flex items-center gap-2 text-sm font-medium mb-2"
                      >
                        <Users className="w-4 h-4" />
                        Your Name *
                      </Label>
                      <Input
                        id="name"
                        placeholder="Enter your full name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div>
                      <Label
                        htmlFor="phone"
                        className="flex items-center gap-2 text-sm font-medium mb-2"
                      >
                        <Phone className="w-4 h-4" />
                        Phone Number *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="Enter your phone number"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        required
                        className="rounded-lg"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="w-full">
                        <Label
                          htmlFor="from"
                          className="flex items-center gap-2 text-sm font-medium mb-2"
                        >
                          <MapPin className="w-4 h-4" />
                          From *
                        </Label>
                        <Select onValueChange={setFrom} value={from}>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select starting point" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map((loc) => (
                              <SelectItem key={loc} value={loc}>
                                {loc}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="w-full">
                        <Label
                          htmlFor="to"
                          className="flex items-center gap-2 text-sm font-medium mb-2"
                        >
                          <MapPin className="w-4 h-4" />
                          To *
                        </Label>
                        <Select onValueChange={setTo} value={to}>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select destination" />
                          </SelectTrigger>
                          <SelectContent>
                            {locations.map((loc) => (
                              <SelectItem key={loc} value={loc}>
                                {loc}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <Label
                        htmlFor="vehicle"
                        className="flex items-center gap-2 text-sm font-medium mb-2"
                      >
                        <Car className="w-4 h-4" />
                        Vehicle Type *
                      </Label>
                      <Select onValueChange={setVehicle} value={vehicle}>
                        <SelectTrigger className="rounded-lg">
                          <SelectValue placeholder="Choose vehicle" />
                        </SelectTrigger>
                        <SelectContent>
                          {vehicleTypes.map((v) => (
                            <SelectItem key={v.id} value={v.id}>
                              {v.name} - {v.capacity}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <CalendarIcon className="w-4 h-4" />
                          Travel Date *
                        </Label>

                        <Popover>
                          <PopoverTrigger asChild>
                            <Button
                              variant="outline"
                              className="w-full justify-start rounded-lg"
                            >
                              {date ? format(date, "PPP") : "Pick a date"}
                            </Button>
                          </PopoverTrigger>

                          <PopoverContent className="w-auto p-0">
                            <Calendar
                              mode="single"
                              selected={date}
                              onSelect={setDate}
                              disabled={(date) => date < new Date()}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </div>

                      {/* TIME SELECT */}
                      <div>
                        <Label className="flex items-center gap-2 text-sm font-medium mb-2">
                          <Clock className="w-4 h-4" />
                          Pickup Time *
                        </Label>

                        <Select value={time} onValueChange={setTime}>
                          <SelectTrigger className="rounded-lg">
                            <SelectValue placeholder="Select pickup time" />
                          </SelectTrigger>

                          <SelectContent>
                            {[
                              "06:00 AM",
                              "07:00 AM",
                              "08:00 AM",
                              "09:00 AM",
                              "10:00 AM",
                              "11:00 AM",
                              "12:00 PM",
                              "01:00 PM",
                              "02:00 PM",
                              "03:00 PM",
                              "04:00 PM",
                              "05:00 PM",
                              "06:00 PM",
                              "07:00 PM",
                              "08:00 PM",
                              "09:00 PM",
                            ].map((t) => (
                              <SelectItem key={t} value={t}>
                                {t}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-primary to-orange-500 hover:from-primary/90 hover:to-orange-500/90 text-white py-6 rounded-xl text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                    size="lg"
                  >
                    <span>Book One Way Taxi</span>
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>

                  <div className="text-center">
                    <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
                      <div className="flex items-center gap-1">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        <span>Instant Confirmation</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span>Safe & Secure</span>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
