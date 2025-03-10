import Footer from "@/components/footer";
import { router } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import MapComponent from "@/components/MapComponent"; // Import the map component

export default function HomePage() {
  return (
    <View className="flex-1 justify-start pt-24">
      <View className="flex-1">
        <Text className="text-black self-center font-bold text-[24px]">
          Welcome, [User's Name]
        </Text>
        <Text className="self-center text-base mt-2">
          You have [X] assets tracked.
        </Text>

        {/* Map Component */}
        <MapComponent latitude={37.78825} longitude={-122.4324} />

        <View className="mt-8 mx-6">
          <TouchableOpacity
            onPress={() => router.push("/(landing)/tracking-page")}
            className="bg-green-500 w-full h-12 justify-center items-center rounded-md mb-4"
          >
            <Text className="text-white text-lg">Live Track</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => router.push("/(properties)/asset-history")}
            className="bg-green-700 w-full h-12 justify-center items-center rounded-md mb-4"
          >
            <Text className="text-white text-lg">Assets Details</Text>
          </TouchableOpacity>
          <TouchableOpacity className="bg-[#21252C] w-full h-12 justify-center items-center rounded-md">
            <Text className="text-white text-lg">Add New Assets</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </View>
    </View>
  );
}
