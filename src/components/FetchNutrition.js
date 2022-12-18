import React, { useEffect, useState, useCallback } from 'react';

export const FetchNutrition = ({item}) => {
    const [nutrition, setNutrition] = useState(
        {
            sugar_g: " ",
            fiber_g: " ",
            serving_size_g: " ",
            sodium_mg: " ",
            name: " ",
            potassium_mg: " ",
            fat_saturated_g: " ",
            fat_total_g: " ",
            calories: " ",
            cholesterol_mg: " ",
            protein_g: " ",
            carbohydrates_total_g: " ",
        }
    )
    const fetchData = useCallback(() => { 
        const url = "https://calorieninjas.p.rapidapi.com/v1/nutrition?query="+item.name;
        const options = {
            method: "GET",
            headers: {
                "X-RapidAPI-Key": "dd95d1d757msh5917ec5beade130p137a2djsnc9995ee7df3e",
                "X-RapidAPI-Host": "calorieninjas.p.rapidapi.com",
            },
        };
        fetch(url,options)
            .then((response) => response.json())
            .then((incomingData) => {
                console.log(incomingData);
                setNutrition(incomingData.items[0]);
            });
    }, [item.name]);

    useEffect(() => { 
        fetchData();
    }, [fetchData, item.name]);

    return (
        <div className="nutrition-information">
            <h3>Nutritional Information</h3>
            <ul>
            <li>Serving size: {nutrition.serving_size_g}g</li>
            <li>Calories per serving: {nutrition.calories}</li>
            <li>Sugar content per serving: {nutrition.sugar_g}g</li>
            <li>Total fat content per serving: {nutrition.fat_total_g}g</li>
            <li>Saturated fat content per serving: {nutrition.fat_saturated_g}g</li>
            <li>Protein content per serving: {nutrition.protein_g}g</li>
            <li>Total carbohydrates per serving: {nutrition.carbohydrates_total_g}g</li>
            <li>Fiber per serving: {nutrition.fiber_g}g</li>
            <li>Sodium per serving: {nutrition.sodium_mg}mg</li>
            <li>Potassium per serving: {nutrition.potassium_mg}mg</li>
            <li>Cholesterol per serving: {nutrition.cholesterol_mg}mg</li>
            </ul>
        </div>
    )
}