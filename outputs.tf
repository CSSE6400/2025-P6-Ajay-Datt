output "taskoverflow_dns_name" {
  value       = aws_lb.taskoverflow.dns_name
  description = "DNS name of the TaskOverflow load balancer."
}