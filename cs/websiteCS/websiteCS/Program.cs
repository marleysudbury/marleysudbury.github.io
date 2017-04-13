using System;

namespace websiteCS
{
	class MainClass
	{
		public static void Main(string[] args)
		{
			Console.WriteLine("ADD TWO NUMBERS TOGETHER");
			Console.Write("Enter the first number: ");
			int num1 = int.Parse(Console.ReadLine());
			Console.Write("Enter the second number: ");
			int num2 = int.Parse(Console.ReadLine());
			int sum = num1 + num2;
			Console.WriteLine("The sum is " + sum);
		}
	}
}