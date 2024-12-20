var builder = WebApplication.CreateBuilder(args);

// Add CORS to allow the Angular frontend to communicate with the API
builder.Services.AddCors(options =>
{
    options.AddPolicy("AllowAngular", policy =>
        policy.WithOrigins("http://localhost:4200") // Angular frontend address
            .AllowAnyMethod()
            .AllowAnyHeader());
});

var app = builder.Build();

// Enable CORS
app.UseCors("AllowAngular");

// Redirect HTTP to HTTPS
app.UseHttpsRedirection();

// Map example API endpoint (remove if not needed)
app.MapGet("/", () => "API is running!");

app.Run();
