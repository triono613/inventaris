<?php


namespace Tests\Feature;

use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;
use App\Models\Product;
use App\Models\User;



class CreateProductTest extends TestCase
{

use RefreshDatabase;

    /** @test */
    public function it_requires_authentication_to_create_product()
    {
        // Create a user to authenticate
        $user = User::factory()->create();

        // Product data to be sent in the request
        $respose = $this->postJson("/api/products", [
            'name' => 'Test Product',
            'sku' => 'TP123',
            'quantity' => 10,
            'price' => 99.99,
        ]);

        $response->assertStatus(401);
    }

     /** @test */
    public function it_can_create_a_product_with_valid_data()
    {
        // Create a user to authenticate
        $user = User::factory()->create();

        $token = $user->createToken('apiTest')->plainTextToken;
        $payload = [
            'name' => 'Test Product',
            'sku' => 'TP123',
            'quantity' => 10,
            'price' => 99.99,
        ];

        $response = $this->withHeader('Authorization', 'Bearer ' . $token)
                         ->postJson('/api/products', $payload);
        $response->assertStatus(201);
        $this->assertDatabaseHas('products', [
            'name' => 'Test Product',
            'sku' => 'TP123',
            'quantity' => 10,
            'price' => 99.99,
        ]);
    }

         /** @test */
    public function it_returns_validation_error_on_invalid_data()
    {
        $user = User::factory()->create();

        $token = $user->createToken('apitest')->plainTextToken;

        $payload = [
            'name' => '',          // invalid
            'sku' => '',           // invalid
            'quantity' => -5,      // invalid
            'price' => null        // invalid
        ];

        $response = $this->withHeader('Authorization', 'Bearer ' . $token)
            ->postJson('/api/products', $payload);

        $response->assertStatus(422);

        $response->assertJsonValidationErrors([
            'name',
            'sku',
            'quantity',
            'price'
        ]);
    }

}





















?>